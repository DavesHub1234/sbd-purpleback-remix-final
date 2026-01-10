const PixieDust = () => {
  return (
    <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full animate-dust-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 4 === 0 
              ? 'hsl(var(--trophy-gold))' 
              : i % 4 === 1 
              ? 'hsl(var(--accent) / 0.6)'
              : 'hsl(0, 0%, 30%)',
            animationDelay: `${i * 0.15}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            filter: 'blur(0.5px)',
            boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
          }}
        />
      ))}
    </div>
  );
};

export default PixieDust;