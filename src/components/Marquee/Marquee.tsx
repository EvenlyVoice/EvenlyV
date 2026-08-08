import './Marquee.css';

interface Props {
  text: string;
  reverse?: boolean;
  lime?: boolean;
}

export const Marquee = ({ text, reverse, lime }: Props) => {
  return (
    <div className={`marquee ${lime ? 'lime' : ''}`}>
      <div 
        className="marquee-track" 
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="marquee__item">
            {text}
            <span className="marquee__separator">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
};