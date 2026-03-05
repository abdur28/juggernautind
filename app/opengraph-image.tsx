import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Juggernaut Industries Limited – Building Africa\'s Future';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A4B 50%, #0D1B2A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #C8A45A, #E8D48B, #C8A45A)',
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#F5F1EB',
            letterSpacing: '0.05em',
            lineHeight: 1.1,
            marginBottom: '8px',
          }}
        >
          JUGGERNAUT
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 300,
            color: '#6B8CA4',
            letterSpacing: '0.15em',
            marginBottom: '32px',
          }}
        >
          INDUSTRIES LIMITED
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: '#C8A45A',
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '2px',
              background: '#C8A45A',
            }}
          />
          Building Africa&apos;s Future Since 2006
        </div>

        {/* Services */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {['Mining', 'Agriculture', 'Construction', 'Solar Energy', 'Oil & Gas'].map(
            (service) => (
              <div
                key={service}
                style={{
                  padding: '8px 20px',
                  border: '1px solid rgba(200, 164, 90, 0.4)',
                  borderRadius: '9999px',
                  fontSize: 14,
                  color: '#C8A45A',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                }}
              >
                {service}
              </div>
            )
          )}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #C8A45A, #E8D48B, #C8A45A)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
