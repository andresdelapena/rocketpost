import Spline from '@splinetool/react-spline';

export const SplineBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-600/10 to-cyan-400/10">
      <div className="opacity-80">
        <Spline
          scene="https://prod.spline.design/K8YaI-Mwwy3r1xWG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};