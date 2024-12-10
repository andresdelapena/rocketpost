import Spline from '@splinetool/react-spline';

export const SplineBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Spline
        scene="https://prod.spline.design/K8YaI-Mwwy3r1xWG/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};