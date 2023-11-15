import { Zoom } from "@mui/material";

const HelperText = ({ checked, message }) => {
  return (
    <Zoom
      in={Boolean(checked)}
      {...(checked ? { timeout: 300 } : { timeout: 300 })}
    >
      <div>
        <p className={`-my-1 text-sm-base text-red-500 font-semibold`}>
          {message}
        </p>
      </div>
    </Zoom>
  );
};

export default HelperText;
