import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from "react-native-animatable"
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        })
    }, [])

    return (
        <SafeAreaView className={`bg-white flex-1 relative`}>
            {/* first */}
            <View className={`flex-row px-6  mt-10 items-center space-x-2`}>
                <View className={`bg-zinc-800 rounded-full w-16 h-16 items-center justify-center`}>
                    <Text className={`text-[#4DABB7] text-3xl font-semibold`}>Go</Text>
                </View>

                <Text className={`text-[#2A2B4B] text-3xl font-semibold`}>Travel</Text>
            </View>

            {/* second */}
            <View className={`px-6 mt-4 space-y-3`}>
                <Text className={`text-[#3C6072] text-[38px]`}>Enjoy The Trip with</Text>
                <Text className={`text-[#00BCC9] text-[34px] font-bold`}>Good Moments</Text>

                <Text className={`text-[#3C6072] text-base`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi perferendis.
                </Text>
            </View>


            {/* circle */}
            <View className={`
                w-[320px] h-[320px] bg-[#00BCC9] rounded-full 
                absolute bottom-14 -right-32
            `} ></View>

            <View className={`
                w-[300px] h-[300px] bg-[#E99265] rounded-full 
                absolute -bottom-10 -left-28
            `} ></View>

            {/* image */}
            <View className={`flex-1 relative items-center justify-center`}>
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={HeroImage}
                    className={`w-full h-full object-cover mt-16`}

                />

                {/* button */}
                <View className={`
                    absolute bottom-20 w-24 h-24  rounded-full items-center justify-center
                    border-[#00BCC9] border-[2px]
                `}>
                    <TouchableOpacity>
                        <Animatable.View 
                            animation="pulse" easing="ease-in-out" iterationCount={"infinite"}
                            className={`
                                w-20 h-20 items-center justify-center bg-[#00BCC9] rounded-full
                            `}>
                                <Text className={`text-white text-[40px] font-semibold`}>Go</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen