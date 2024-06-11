import { Button, View } from "react-native";

export  const Navigation = ({navigation}) => {

return(

    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
        <Button
            title="Login"
            onPress={() => navigation.navigate
            ("Login")}
        />
        <Button
            title="CreateAccount"
            onPress={() => navigation.navigate
            ("CreateAccount")}
        />
        <Button
            title="RegistrationSuccessful"
            onPress={() => navigation.navigate
            ("RegistrationSuccessful")}
        />
        
        <Button
            title="PasswordRecover"
            onPress={() => navigation.navigate
            ("PasswordRecover")}
        />
        <Button
            title="EmailVerification"
            onPress={() => navigation.navigate
            ("EmailVerification")}
        />
        <Button
            title="PasswordResetSuccessful"
            onPress={() => navigation.navigate
            ("PasswordResetSuccessful")}
        />
        <Button
            title="VerificationCode"
            onPress={() => navigation.navigate
            ("VerificationCode")}
        />
        <Button
            title="PasswordReset"
            onPress={() => navigation.navigate
            ("PasswordReset")}
        />
        
    </View>


);

}