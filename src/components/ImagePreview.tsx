import { useRef, useState } from 'react';

export function ImagePreview () {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        if (imgRef.current) {
          imgRef.current.src = reader.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-preview">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && (
        <div>
          <img ref={imgRef} src={imageSrc} alt="Предпросмотр" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      )}
    </div>
  );
};
