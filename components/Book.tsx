import { useContext, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { BranchContext } from "@/lib/branchContext";
import { CopiesContext } from "@/lib/copiesContext";
import type { Favourite } from "@/lib/Favourite";
import { Copies } from "./Copies";

function Availability({ branches }: { branches: string[] | null }) {
  const { getBranchName } = useContext(BranchContext);
  if (branches === null) {
    return null;
  }
  const namedBranches = branches.map(getBranchName);
  return <Text>Ledig ved {namedBranches.join(", ")}</Text>;
}

export function FavouriteComponent({
  recordId,
  title,
  mainEntryName,
  mediaType,
}: Favourite) {
  const [modalVisible, setModalVisible] = useState(false);
  const { copies } = useContext(CopiesContext);
  const availableBranches = copies[recordId].map((c) => c.branchcode);
  let emoji = "";
  if (mediaType === "Bok") {
    emoji = "📕 ";
  } else if (mediaType === "Film") {
    emoji = "📽️ ";
  } else if (mediaType === "Noter") {
    emoji = "🎼 ";
  }
  const copiesInfo = copies[recordId];
  const checkCopies = async () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.card}>
      {copiesInfo && (
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Copies copies={copiesInfo} />
            </View>
          </View>
        </Modal>
      )}
      <Pressable onPress={checkCopies}>
        <Text style={styles.title}>
          {emoji}
          {title}
        </Text>
        {mainEntryName && <Text style={styles.author}>{mainEntryName}</Text>}
        <Availability branches={availableBranches} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#ddd", borderRadius: 12, margin: 6, padding: 6 },
  title: { fontWeight: 700 },
  author: { fontStyle: "italic" },
  centeredView: { flex: 1, justifyContent: "center", alignItems: "center" },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
  },
});
