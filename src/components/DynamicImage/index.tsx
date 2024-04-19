import React, { ReactElement, useEffect, useState } from "react";

interface DynamicImageProps {
  children: ReactElement; // Single React element that accepts either src or image
  originalImage: string | undefined; // Original image source that needs resizing
  defaultImage?: string; // Optional default image source
}

const DynamicImage: React.FC<DynamicImageProps> = ({
  children,
  originalImage,
  defaultImage = "https://static.wikia.nocookie.net/bleach/images/8/8d/572Kenpachi_profile.png/revision/latest?cb=20210417222326&path-prefix=en",
}) => {
  const [imageSrc, setImageSrc] = useState<string>(defaultImage);

  useEffect(() => {
    setImageSrc(originalImage as string);
    //Here we can call api to get image url

    // let isMounted = true;

    // ImageFetch(originalImage).then((resizedUrl) => {
    //   if (isMounted) {
    //     setImageSrc(resizedUrl);
    //   }
    // });

    // return () => {
    //   isMounted = false;
    // };
  }, [originalImage]);

  // Determine the prop name to use ('src' or 'image') based on the child's prop type
  const propName = "src" in children.props ? "src" : "image";

  // Clone the child and inject the new image source into the appropriate prop
  const childWithProps = React.cloneElement(children, { [propName]: imageSrc });

  return <>{childWithProps}</>;
};

export default DynamicImage;
