import { zooLensSymbol, gradient} from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = ({bubble,positionMain,bubbleColor,bubbleWingColor, imgSrc, icon}) => {
  return (
    <div className={`absolute ${positionMain} max-w-[17.5rem] py-6 px-8 ${bubbleColor} rounded-t-xl rounded-bl-xl font-code text-n-1/90`}>
      {bubble}
      {imgSrc && <img src={imgSrc} className="inline-block w-5 h-5"></img>}
      <ChatBubbleWing className={`absolute -right-6 -bottom-[0.01rem] ${bubbleWingColor}`} />
      {icon &&
      <div className="absolute left-[13.5rem] -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-orange-400 rounded-[0.75rem]">
        <img
          src={zooLensSymbol}
          width={26}
          height={26}
          alt="ZooLens Logo"
        />
      </div>
      }
    </div>
  );
};



