import { View, Text } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/Models/AffrimationCategory";

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
      <Text>GuildedAffirmationsGallery</Text>
    </View>
  );
};

export default GuildedAffirmationsGallery;
