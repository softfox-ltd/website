import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{
        background: '#1e293b', width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 40,
      }}>
        <span style={{
          color: '#f8fafc', fontSize: 110, fontWeight: 700,
          fontFamily: 'Georgia, serif', lineHeight: 1,
          marginBottom: 8,
        }}>S</span>
        <div style={{
          width: 14, height: 14, borderRadius: '50%',
          background: '#a0522d',
        }} />
      </div>
    ),
    { ...size },
  );
}
