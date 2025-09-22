import { View, Text, Image, ScrollView, useWindowDimensions} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import "../../global.css"

const posts = [
  {
    id: 1,
    user: "Devon Lane",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 2,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 3,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 4,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=300&fit=crop",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
];

export default function HomeScreen(){
    const { width } = useWindowDimensions();
    const isDesktop = width >= 768;

    return(
        <View className="flex-1 bg-white">
            {/* Header - only show on desktop since mobile has tab bar */}
            {isDesktop && (
                <View className="border-b border-gray-200 p-4 bg-white/80 backdrop-blur-sm sticky top-0">
                    <Text className="text-xl font-bold">Home</Text>
                </View>
            )}
            
            <ScrollView 
                className="flex-1"
                showsVerticalScrollIndicator={false}
            >
                {posts.map((post) => (
                    <View key={post.id} className="border-b border-gray-200 p-4 hover:bg-gray-50">
                        {/* Header */}
                        <View className="flex-row items-center mb-2">
                            <Image
                                source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <View className="flex-1">
                                <View className="flex-row items-center">
                                    <Text className="font-bold text-gray-900">{post.user}</Text>
                                    <Text className="text-gray-500 ml-1">{post.handle}</Text>
                                    <Text className="text-gray-500 ml-1">·</Text>
                                    <Text className="text-gray-500 ml-1">2h</Text>
                                </View>
                            </View>
                        </View>
                        
                        {/* Content */}
                        <Text className="mb-3 text-gray-900 leading-5">{post.text}</Text>
                        
                        {post.image && (
                            <Image
                                source={{ uri: post.image }}
                                className="w-full h-64 rounded-2xl mb-3"
                                resizeMode="cover"
                                onError={(error) => console.log('Image load error:', error)}
                                onLoad={() => console.log('Image loaded successfully:', post.image)}
                                style={{
                                    width: '100%',
                                    height: 256,
                                    borderRadius: 16,
                                    marginBottom: 12,
                                    backgroundColor: '#f3f4f6' // fallback background
                                }}
                            />
                        )}
                        
                        {/* Actions */}
                        <View className="flex-row justify-between max-w-md">
                            <View className="flex-row items-center group">
                                <View className="p-2 rounded-full group-hover:bg-blue-50">
                                    <Ionicons name="chatbubble-outline" size={18} color="#6b7280" />
                                </View>
                                <Text className="text-gray-500 ml-1 text-sm">{post.comments}</Text>
                            </View>
                            
                            <View className="flex-row items-center group">
                                <View className="p-2 rounded-full group-hover:bg-green-50">
                                    <Ionicons name="repeat" size={18} color="#6b7280" />
                                </View>
                                <Text className="text-gray-500 ml-1 text-sm">{post.shares}</Text>
                            </View>
                            
                            <View className="flex-row items-center group">
                                <View className="p-2 rounded-full group-hover:bg-red-50">
                                    <Ionicons name="heart-outline" size={18} color="#6b7280" />
                                </View>
                                <Text className="text-gray-500 ml-1 text-sm">{post.likes}</Text>
                            </View>
                            
                            <View className="p-2 rounded-full hover:bg-blue-50">
                                <Feather name="share" size={18} color="#6b7280" />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}