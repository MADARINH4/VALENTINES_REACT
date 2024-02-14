import { useState, createContext } from 'react';
import IMAGES from '../model-images';

export const ImageStatusContext = createContext({
  title: '',
  type: null,
  onImageChangeAccepted: () => {},
  onImageChangeRejected: () => {},
});

export default function ImageStatusContextProvider({ children }) {
  const [imageStatus, setImageStatus] = useState({
    title: 'Will you be my Valentine',
    type: IMAGES.WAITING,
  });

  function handleImageAccepted() {
    setImageStatus((prev) => {
      return {
        ...prev,
        title: 'Ok yay!!',
        type: IMAGES.ACCEPTED,
      };
    });
  }

  function handleImageRejected() {
    setImageStatus((prev) => {
      return {
        ...prev,
        type: IMAGES.REJECTED,
      };
    });
  }

  const ctxValue = {
    title: imageStatus.title,
    type: imageStatus.type,
    onImageChangeAccepted: handleImageAccepted,
    onImageChangeRejected: handleImageRejected,
  };

  return (
    <ImageStatusContext.Provider value={ctxValue}>
      {children}
    </ImageStatusContext.Provider>
  );
}
