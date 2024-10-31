import Image from "next/image";
import styles from "@/styles/styles.module.css";

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-4xl font-bold text-center">Next - CSS Modules</h1>
      <h2 className="text-2xl font-bold">Type Script</h2>
      <h2 className="text-2xl font-bold text-blue-800">Tailwind CSS integrated</h2>
      <h2 className={styles.heading}>CSS Modules</h2>
    </div>
  );
}
