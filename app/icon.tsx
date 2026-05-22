import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 15,
          fontWeight: 900,
          letterSpacing: '-1.4px',
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
          right: 3,
          bottom: 5,
          width: 4,
          height: 4,
          background: '#3b82f6',
        }}
      />
    </div>,
    { ...size },
  );
}
