import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/elements";

import { VerifyEmailScreen } from "../features/email-verification/screens/VerifyEmailScreen";
import { useSignOut } from "../hooks/use-sign-out";

const Stack = createStackNavigator();

export const UnverifiedAppNavigator = () => {
  const [signOut, { isLoading: isSigninOut }] = useSignOut();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmailScreen}
        options={{
          title: "Verify Email",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={signOut}
              isLoading={isSigninOut}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
