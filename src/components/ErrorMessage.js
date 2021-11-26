import React from "react";
import PropTypes from "prop-types";
import { Alert } from "native-base";

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <Alert status="error">
      <Alert.Icon />
      <Alert>{error.message}</Alert>
    </Alert>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.object,
};
