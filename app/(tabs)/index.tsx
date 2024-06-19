import BizCardStyle from '@/styles/BizCardStyles';
import BizCardStyles from '@/styles/BizCardStyles';
import {useState} from "react";
import {Text, View} from 'react-native';


export interface Email {
    type: string,
    email: string
}

export interface PhoneNumber {
    type: string,
    phoneNumber: string
}

export interface Socials {
    type: string,
    link: string
}


export interface UserData {
    id: number;
    name: string;
    emailList: Email[],
    phoneNumberList: PhoneNumber[],
    socials?: Socials[]
}


export default function TabOneScreen() {
    const [userData, useUserData] = useState<UserData>({
        id: 0,
        name: "Andrew Ferruolo",
        emailList: [{type: "Work", email: "ferruolo@umich.edu"}, {
            type: "Personal",
            email: "andrew.ferruolo@gmail.com"
        }],
        phoneNumberList: [
            {type: "Work", phoneNumber: "+1-(860)-999-4565"}
        ],
        socials: []
    });


    return (<View style={BizCardStyles.container}>
        <Text style={BizCardStyle.displayName}>{userData.name}</Text>
        <View style={BizCardStyle.emailBlock}>
            <Text>Emails: </Text>
            {userData.emailList.map((item, index) => (
                <View style={BizCardStyle.emailSection}>
                    <Text style={BizCardStyle.emailText}>{item.type + ": "} </Text>
                    {/*<TouchableOpacity*/}
                    {/*    onPress={() => Linking.openURL('mailto:andrew.ferruolo@gmail.com')}>*/}
                    <Text style={BizCardStyle.emailText}>{item.email}</Text>

                    {/*</TouchableOpacity>*/}
                </View>

            ))}
        </View>
        <View style={BizCardStyle.emailBlock}>
            <Text>Phone Numbers: </Text>
            {userData.phoneNumberList.map((item, index) => (
                <View style={BizCardStyle.emailSection}>
                    <Text style={BizCardStyle.emailText}>{item.type + ": "} </Text>
                    {/*<TouchableOpacity*/}
                    {/*    onPress={() => Linking.openURL('mailto:andrew.ferruolo@gmail.com')}>*/}
                    <Text style={BizCardStyle.emailText}>{item.phoneNumber}</Text>

                    {/*</TouchableOpacity>*/}
                </View>

            ))}
        </View>

    </View>);
}

