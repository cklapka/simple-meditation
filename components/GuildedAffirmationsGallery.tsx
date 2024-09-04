import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/Models/AffirmationCategory";
import { Link } from "expo-router";

interface GuildedAffirmationsGalleryProfs {
  title: string;
  previews: GalleryPreviewData[];
}

const GuildedAffirmationsGallery = ({
  title,
  previews,
}: GuildedAffirmationsGalleryProfs) => {
  return (
    <View className="my-5">
      <View mb-2>
        <Text className="text-white font-bold text-1xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rpimded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default GuildedAffirmationsGallery;
