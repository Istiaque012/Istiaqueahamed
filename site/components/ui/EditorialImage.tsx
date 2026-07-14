import Image from "next/image";

type MediaPlaceholderProps = {
  altGuidance: string;
  className?: string;
  label?: string;
  ratio?: "portrait" | "landscape" | "square" | "wide";
};

export function MediaPlaceholder({
  altGuidance,
  className = "",
  label = "Personal photograph pending",
  ratio = "portrait",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`ui-media-placeholder ui-ratio--${ratio} ${className}`.trim()}
      role="img"
      aria-label={`${label}. Intended image: ${altGuidance}`}
    >
      <span className="ui-media-placeholder__mark">IA</span>
      <span className="ui-media-placeholder__copy">
        <small>Image direction</small>
        {label}
      </span>
    </div>
  );
}

type EditorialImageProps = MediaPlaceholderProps & {
  alt: string;
  caption?: string;
  priority?: boolean;
  src?: string;
};

export function EditorialImage({
  alt,
  altGuidance,
  caption,
  className = "",
  label,
  priority = false,
  ratio = "portrait",
  src,
}: EditorialImageProps) {
  return (
    <figure className={`ui-editorial-image ${className}`.trim()}>
      {src ? (
        <div className={`ui-editorial-image__frame ui-ratio--${ratio}`}>
          <Image alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 55vw" src={src} />
        </div>
      ) : (
        <MediaPlaceholder altGuidance={altGuidance} label={label} ratio={ratio} />
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
