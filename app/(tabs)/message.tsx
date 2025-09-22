import { View, Text, useWindowDimensions } from "react-native";

export default function MessagePage(){
    const { width } = useWindowDimensions();
    const isDesktop = width >= 768;

    return(
        <View className="flex-1 bg-white">
            {/* Header - only show on desktop */}
            {isDesktop && (
                <View className="border-b border-gray-200 p-4 bg-white">
                    <Text className="text-xl font-bold">Messages</Text>
                </View>
            )}
            
            <View className="flex-1 items-center justify-center p-6">
                <Text className="text-2xl font-bold text-gray-900 mb-2">Welcome to your inbox!</Text>
                <Text className="text-gray-600 text-center">
                    Drop a line, share posts and more with private conversations between you and others on Twitter.
                </Text>
            </View>
        </View>
    )
}