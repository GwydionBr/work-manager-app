import * as AppleAuthentication from "expo-apple-authentication";
import { supabase } from "@/utils/supabase";

export function SignInWithAppleButton() {
  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 200, height: 64 }}
      onPress={async () => {
        try {
          console.log('Starting Apple sign in...');
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          
          // Sign in via Supabase Auth.
          if (credential.identityToken) {
            console.log('Identity token found, signing in with Supabase...');
            const {
              error,
              data: { user },
            } = await supabase.auth.signInWithIdToken({
              provider: "apple",
              token: credential.identityToken,
            });
            
            if (!error) {
            } else {
              console.log('Supabase auth error:', error);
            }
          } else {
            console.log('No identity token received from Apple');
            // throw new Error("No identityToken.");
          }
        } catch (e: any) {
          if (e.code === "ERR_REQUEST_CANCELED") {
            console.log('User canceled the sign-in flow');
            // handle that the user canceled the sign-in flow
          } else {
            console.log('Unexpected error during sign in:', e);
            // handle other errors
          }
        }
      }}
    />
  );
}
