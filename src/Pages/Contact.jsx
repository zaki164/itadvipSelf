import PhoneInput from "react-phone-input-2";
import ar from "react-phone-input-2/lang/ar.json";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert, MenuItem, Select, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Branches, HelperText, Loader } from "../Components";
import { useGetSettingsDataQuery } from "../store/SettingsApi";
import { useGetServicesDataQuery } from "../store/ServicesApi";
import { useLocation } from "react-router-dom";
import {
  useContactMutation,
  useNeedServicesMutation,
} from "../store/ContactApi";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [isService, setIsService] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessageState, setAlertMessageState] = useState("success");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const {
    data: settingsData,
    isFetching: isLoadingSettings,
    isError: isErrorSettings,
    error: SettingsError,
  } = useGetSettingsDataQuery();
  const {
    data: ServicesData,
    isFetching: isLoadingServices,
    isError: isErrorServices,
    error: ServicesError,
    refetch: refetchServices,
  } = useGetServicesDataQuery();

  const [
    contact,
    {
      data: contactData,
      isSuccess: isSuccessContact,
      isError: isErrorContact,
      error: contactError,
    },
  ] = useContactMutation();
  const [
    needServices,
    {
      data: needServicesData,
      isSuccess: isSuccessNeedServices,
      error: needServicesError,
      isError: isErrorNeedServices,
    },
  ] = useNeedServicesMutation();

  const location = useLocation();

  const schema = yup.object().shape({
    name: yup.string().required(t("يرجى إدخال الإسم")),
    phone: yup
      .string()
      .required(t("يرجى إدخال رقم الهاتف"))
      .matches(
        /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{6,14}$/,
        t("الرقم غير صحيح")
      ),
    email: yup
      .string()
      .required(t("يرجي ادخال البريد الالكتروني"))
      .matches(
        /^[\w.!#$%&'*+/=?^_`{|}~-]+@([\w-]+\.)+[\w-]{2,4}$/,
        t("البريد الالكتروني غير صحيح")
      ),
    service_id: yup.string().notRequired(),
    message: yup.string().required(t("يرجي ادخال الرساله")),
  });

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    validationSchema: schema,
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service_id: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setValue("phone", getValues("phone").replace(getValues("phone")[0], ""));
    if (isService) {
      needServices(data);
    } else {
      const filterdData = Object.fromEntries(
        Object.entries(data).filter(
          ([key, value]) => key !== "service_id" || !!value
        )
      );
      contact(filterdData);
    }
  };

  useEffect(() => {
    if (location?.state?.from === "service") {
      setIsService(true);
    } else {
      setIsService(false);
    }
  }, [location?.state]);

  useEffect(() => {
    if (isSuccessNeedServices) {
      setAlertMessageState("success");
      setAlertMessage(needServicesData?.data);
      reset();
      setOpen(true);
    }
    if (isSuccessContact) {
      setAlertMessageState("success");
      setAlertMessage(contactData?.data);
      reset();
      setOpen(true);
    }
  }, [isSuccessContact, isSuccessNeedServices]);

  useEffect(() => {
    if (isErrorContact) {
      setAlertMessageState("error");
      setAlertMessage(contactError?.data?.message);
      setOpen(true);
    }
    if (isErrorNeedServices) {
      setAlertMessageState("error");
      setAlertMessage(needServicesError?.data?.message);
      setOpen(true);
    }
  }, [isErrorContact, isErrorNeedServices]);

  useEffect(() => {
    refetchServices();
  }, [i18n.language]);

  return isLoadingSettings || isLoadingServices ? (
    <Loader component />
  ) : isErrorSettings ? (
    <h1>{SettingsError?.data?.message}</h1>
  ) : isErrorServices ? (
    <h1>{ServicesError?.data?.message}</h1>
  ) : (
    <div>
      <div className="custom-container">
        <Branches data={settingsData?.data?.branches} />
        <section className="section_padding flex max-lg:flex-col-reverse gap-6">
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: i18n.language === "en" ? "left" : "right",
            }}
          >
            <Alert
              onClose={handleClose}
              severity={alertMessageState}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                height: 60,
                fontSize: 18,
              }}
            >
              {alertMessage}
            </Alert>
          </Snackbar>
          <div className="flex flex-col lg:w-[50%]">
            <h2 className="text-3xl-4xl font-bold">{t("شاركنا")}</h2>
            <p className="text-xl-2xl font-medium mt-2 md:mt-4 mb-4 md:mb-8">
              {t("افضل الحلول")}
            </p>
            <form
              className="w-full flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="custom-input"
                    placeholder={t("الاسم بالكامل")}
                  />
                )}
              />
              <HelperText
                checked={errors?.name}
                message={errors?.name?.message}
              />
              <PhoneInput
                country={"sa"}
                localization={i18n.language === "ar" ? ar : ""}
                excludeCountries={["il"]}
                enableSearch
                containerStyle={{
                  direction: "rtl",
                }}
                countryCodeEditable={false}
                placeholder={t("رقم الجوال")}
                value={getValues("phone")}
                autoFormat={false}
                onChange={(value, data) => setValue("phone", `+${value}`)}
                containerClass="w-full"
                inputClass="!w-full !h-full !p-0 !border-none !text-sm md:!text-base !text-black"
                buttonClass="!border-none !bg-transparent"
                dropdownClass=""
                searchClass="!bg-grayColor !z-50 flex"
                searchPlaceholder={t("بحث")}
                className="custom-input !ps-14"
              />
              <HelperText
                checked={errors?.phone}
                message={errors?.phone?.message}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="custom-input"
                    placeholder={t("البريد الالكتروني")}
                  />
                )}
              />
              <HelperText
                checked={errors?.email}
                message={errors?.email?.message}
              />
              {isService && (
                <>
                  <Controller
                    name="service_id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
                        {...field}
                        MenuProps={{ disableScrollLock: true }}
                        displayEmpty
                        renderValue={
                          field.value !== ""
                            ? undefined
                            : () => t("اختر الخدمة")
                        }
                        className="!font-SSTArabic outline-none border-[1px] border-grayText/30 w-full"
                        sx={{
                          p: "6px",
                          borderRadius: "16px",
                          fontSize: "17px",
                          fontWeight: "bold",
                        }}
                      >
                        {ServicesData?.data?.map((ele) => (
                          <MenuItem
                            value={ele?.id}
                            key={ele?.id}
                            className="!text-base md:!text-lg !font-SSTArabic"
                          >
                            {ele?.name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  <HelperText
                    checked={errors?.service}
                    message={errors?.service?.message}
                  />
                </>
              )}
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="custom-input resize-none h-40"
                    placeholder={t("كيف يمكننا مساعدتك؟")}
                  />
                )}
              />
              <HelperText
                checked={errors?.message}
                message={errors?.message?.message}
              />
              <button
                type="submit"
                className="w-full bg-mainColor text-white px-4 md:px-8 py-3 md:py-6 font-medium text-sm-base rounded-3xl mt-5 duration-300 hover:bg-mainColor/80"
              >
                {t("ارسال الطلب")}
              </button>
            </form>
          </div>
          <div className="lg:w-[50%] flex_center">
            <img
              src={settingsData?.data?.settings?.contact_image}
              alt="contact img"
              className="max-h-[650px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
