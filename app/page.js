import Image from "next/image";
// import leafImage from "images/leaf.png";

export default function Home() {
  const styles = {
    siteMessage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: 25,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.siteMessage}>
      <Image
        src="/images/leaf_image.png"
        alt="Leaf"
        style={{ transform: "scaleX(-1)" }}
        width={100}
        height={100}
      />
      Benney Wedding <br /> Coming soon...
      <Image src="/images/leaf_image.png" alt="Leaf" width={100} height={100} />
    </div>
  );
}
