"use client";

import React from "react";
import Modal from "./Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, isOpen, onClose }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" fill className="object-cover" src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
