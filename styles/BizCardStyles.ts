import {StyleSheet} from "react-native";

const BizCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    displayName: {
        fontSize: 30,
        fontFamily: "JetBrainsMono_400Regular"
    },
    emailBlock: {
        marginTop: 20
    },

    emailSection: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    emailText: {
        fontFamily: "JetBrainsMono_400Regular"
    }


});


export default BizCardStyle;
