
import React from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, useWindowDimensions, SafeAreaView, StyleSheet } from "react-native";
import { Feather, Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";
import "./global.css";

// Definisi type untuk props komponen
interface AppProps {
  isDesktop: boolean;
}

// Data placeholder untuk post
const posts = [
  {
    id: 1,
    user: "Devon Lane",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/300",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 2,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/301",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 3,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/301",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 4,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/301",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
];

const Sidebar = ({ isDesktop }: AppProps) => (
  <View className={`p-4 ${isDesktop ? "w-1/5" : "hidden"}`}>
    <View className="flex-row items-center mb-6">
      <FontAwesome5 name="twitter" size={30} color="#1DA1F2" />
    </View>
    <View className="space-y-4">
      <TouchableOpacity className="flex-row items-center space-x-2">
        <FontAwesome name="home" size={20} color="#1DA1F2" />
        <Text className="text-lg font-bold text-[#1DA1F2]">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center space-x-2">
        <FontAwesome5  name="hashtag" size={20} color="gray" />
        <Text className="text-lg">Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center space-x-2">
        <Feather name="bell" size={20} color="gray" />
        <Text className="text-lg">Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center space-x-2">
        <Feather name="mail" size={20} color="gray" />
        <Text className="text-lg">Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center space-x-2">
        <Feather name="bookmark" size={20} color="gray" />
        <Text className="text-lg">Bookmark</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center space-x-2">
        <Feather name="list" size={20} color="gray" />
        <Text className="text-lg">List</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center space-x-2">
        <Feather name="user" size={20} color="gray" />
        <Text className="text-lg">Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center space-x-2">
        <Ionicons name="ellipsis-horizontal-circle" size={20} color="gray" />
        <Text className="text-lg">More</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-sky-500 py-3 px-4 rounded-full mt-4">
        <Text className="text-white text-center font-bold">Tweet</Text>
      </TouchableOpacity>
    </View>
    <View className="flex-row items-center justify-between mt-6 absolute bottom-4 w-10/12">
      <View className="flex-row items-center">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          className="w-10 h-10 rounded-full mr-3  "
        />
        <View>
          <Text className="font-bold">Jerome Bell</Text>
          <Text className="text-gray-500 text-sm">@afonsoinocente</Text>
        </View>
      </View>
      <TouchableOpacity className="flex-row items-center">
        <Ionicons name="ellipsis-horizontal" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  </View>
);

const TrendWidgets = ({ isDesktop }: AppProps) => (
  <View className={`p-4 ${isDesktop ? "md:block md:w-1/4" : "hidden"}`}>
    <View className="space-y-4">
      <View className="flex-row items-center bg-gray-200 p-2 rounded-full mb-4">
        <Feather name="search" size={20} color="gray" />
        <TextInput placeholder="Search Twitter" className="ml-2 flex-1" />
      </View>
      <ScrollView>
        <View className="p-4 bg-[#F7F9FA] rounded-xl mb-4">
          <Text className="text-xl font-bold mb-2">What's happening</Text>
          <View className="h-[1px] bg-gray-300 mb-2 w-full" />
            <View className="space-y-4">
              <View className="border-b border-gray-200 pb-2 flex-row item-start">
                <View className="flex-1 pr-2">
                  <Text className="text-sm text-gray-500">COVID19 · Last night</Text>
                  <Text className="font-bold">England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</Text>
                  <Text className="text-sm text-gray-500 mt-1">Trending with </Text>
                  <Text className="text-sm text-[#1DA1F2] mt-1">#covid19 </Text>
                </View>
                <Image
                  source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
                  className="w-20 h-20 rounded-lg ml-2 self-center"
                />
              </View>
              <View className="border-b border-gray-200 pb-2">
                <Text className="text-sm text-gray-500 ">Trending in Indonesia</Text>
                <Text className="font-bold">Nativewind</Text>
                <Text className="text-sm text-gray-500 mt-1">2.3K Tweets</Text>
              </View>
              <View>
                <Text className="text-sm font-bold text-[#1DA1F2]">Show More</Text>
              </View>
            </View>
        </View>
      </ScrollView>
    </View>
    <View className="p-4 bg-[#F7F9FA] rounded-xl">
      <Text className="text-xl font-bold mb-2">Who to follow</Text>
      <View className="space-y-4">
        <View className="flex-row items-center justify-between border-b border-gray-200 pb-2">
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
              className="w-10 h-10 rounded-full mr-3"
            />
            <View>
              <Text className="font-bold">Bessie Cooper</Text>
              <Text className="text-gray-500 text-sm">@bessiecooper</Text>
            </View>
          </View>
          <TouchableOpacity className="bg-sky-500 px-3 py-1 rounded-full">
            <Text className="text-white text-center">Follow</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
              className="w-10 h-10 rounded-full mr-3"
            />
            <View>
              <Text className="font-bold">Jenny Wilson</Text>
              <Text className="text-gray-500 text-sm">@jennywilson</Text>
            </View>
          </View>
          <TouchableOpacity className="bg-sky-500 px-3 py-1 rounded-full">
            <Text className="text-white text-center">Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const MainFeed = ({ isDesktop }: AppProps) => (
  // Container utama dengan flex-1 untuk mengisi ruang yang tersedia
  <View className={`${isDesktop ? "w-1/2" : "flex-1"} `}>
    <View className="bg-white pb-2 border-b-8 border-gray-100 ">
      {/* Header yang statis di bagian atas */}
      <View className="h-14 px-4 flex-row items-center justify-between border-b border-gray-200">
        <Text className="text-xl font-bold">Home</Text>
        <Feather name="star" size={20} color="#1DA1F2" />
      </View>

      {/* Input "What's happening" yang statis di bawah header */}
      <View className="flex-row items-center pt-4 pl-4">  
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <TextInput
          placeholder="What's happening?"
          className="flex-1 text-base pt-6"
          multiline
        />
      </View>
      <View className="flex-row items-center justify-between px-4 pb-2">
        {/* Container untuk icon yang berdekatan */}
        <View className="flex-row items-center ml-14 space-x-4">
          <TouchableOpacity>
            <FontAwesome name="picture-o" size={20} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="gif-box" size={20} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="poll-h" size={20} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="emoji-happy" size={20} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="calendar-clock-outline" size={20} color="#1DA1F2" />
          </TouchableOpacity>
        </View>
        
        {/* Tombol "Tweet" */}
        <TouchableOpacity className="bg-sky-500 py-2 px-4 rounded-full">
          <Text className="text-white font-bold text-center">Tweet</Text>
        </TouchableOpacity>
      </View>
    </View>
    {/* ScrollView yang hanya berisi konten yang dapat digulir (postingan) */}
    <ScrollView showsVerticalScrollIndicator={false}>
      {posts.map((post) => (
        <View key={post.id} className="bg-white border-b border-gray-200 p-4">
          <View className="flex-row items-center mb-2">
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
              className="w-10 h-10 rounded-full mr-3"
            />
            <View>
              <Text className="font-bold">{post.user}</Text>
              <Text className="text-gray-500">{post.handle}</Text>
            </View>
          </View>
          <Text className="mb-2">{post.text}</Text>
          {post.image && (
            <Image
              source={{ uri: post.image }}
              className="w-full h-48 rounded-xl mb-2"
              resizeMode="cover"
            />
          )}
          <View className="flex-row justify-between mt-2 pb-2">
            <View className="flex-row items-center space-x-1">
              <Ionicons name="chatbubble-outline" size={20} color="gray" />
              <Text className="text-gray-500">{post.comments}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Ionicons name="repeat" size={20} color="gray" />
              <Text className="text-gray-500">{post.shares}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Ionicons name="heart" size={20} color="red" />
              <Text className="text-red-500 font-bold">{post.likes}</Text>
            </View>
            <Feather name="share" size={20} color="gray" />
          </View>
          <View>
            <Text className=" text-sky-500 font-bold">Show this thread</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default function App() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768; // switch layout for tablet/desktop

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isDesktop && <Sidebar isDesktop={isDesktop} />}
        <MainFeed isDesktop={isDesktop} />
        {isDesktop && <TrendWidgets isDesktop={isDesktop} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 1200, // max-w-screen-xl
    alignSelf: 'center',
  },
});

import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}

