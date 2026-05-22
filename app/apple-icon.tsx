import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontSize: 78,
          fontWeight: 900,
          letterSpacing: '-6px',
          color: '#111111',
          display: 'flex',
          lineHeight: 1,
        }}
      >
        RNV
      </div>
      <div
        style={{
          position: 'absolute',
          right: 28,
          bottom: 40,
          width: 18,
          height: 18,
          background: '#3b82f6',
        }}
      />
    </div>,
    { ...size },
  );
}
