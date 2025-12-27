import ProfileImage from "./ProfileImage";
import Introduction from "./Introduction";

export default function IntroductionSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12">
      <ProfileImage src="https://share.icloud.com/photos/0b1kXRzFt9qnenkgVa2MQV-ww" />
      <Introduction />
    </div>
  );
}
