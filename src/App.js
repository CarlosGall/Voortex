import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    console.log('dato',process.env.REACT_APP_DATE)
    const countdownDate = new Date(process.env.REACT_APP_DATE).getTime();
    console.log('dato',countdownDate)
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds: seconds < 10 ? `0${seconds}` : seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <Box
      sx={{
        minHeight: '100vh', 
        backgroundImage: `url('planeta.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Fondo gris */}
      < Box
        sx={{
          position: 'absolute',
          width: { xs: '100%', lg: '80%' },
          height: { xs: '99%', lg: '90%' },
          padding: { xs: '50px', md: '0px' },
          backgroundColor: { xs: '', md: '#D3D3D3' },
          zIndex: 1,
          clipPath: {
            md: `
            polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 
            90% 100%, 10% 100%, 0% 90%, 0% 10%)
          `},
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
        }}

      >
        {/* capa imagenes */}
        < Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            overflow: 'hidden',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Capa10.png`}
            alt="Imagen 1"
            style={{ width: '20%', height: 'auto', objectFit: 'contain', zIndex: 2 }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/Capa7.png`}
            alt="Imagen 2"
            style={{ width: '20%', height: 'auto', objectFit: 'contain', zIndex: 2 }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/Capa8.png`}
            alt="Imagen 3"
            style={{ width: '20%', height: 'auto', objectFit: 'contain', zIndex: 2 }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/Capa6.png`}
            alt="Imagen 4"
            style={{ width: '20%', height: 'auto', objectFit: 'contain', zIndex: 2 }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/Capa9.png`}
            alt="Imagen 5"
            style={{ width: '20%', height: 'auto', objectFit: 'contain', zIndex: 2 }}
          />
        </Box >

        {/* Corte central */}
        < Box
          sx={{
            position: 'absolute',
            backgroundColor: '#0B0E20',
            clipPath: 'polygon(0% 0%, 5% 100%, 95% 100%, 100% 0%)',
            zIndex: 2,
            width: { xs: '240px', md: '450px', lg: '450px' },
            height: { xs: '50px', md: '80px', lg: '80px' },
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/VOORTEX LOGO.png`}
            alt="Voortex Logo"
            style={{ width: '100%', height: '90%', objectFit: 'contain' }}
          />
        </Box >
      </Box >

      <Grid container spacing={0} sx={{ position: 'relative', zIndex: 3, maxWidth: '80%', overflow: 'hidden' }}>
        {/* Sección Izquierda */}
        <Grid item xs={12} md={12} lg={4.25} sx={{ padding: '10px' }}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: '#000',
                fontWeight: 'bold',
                marginTop: { xs: '100px', md: '220px', lg: '20px' },
              }}
            >
              Tu tienda, todo Colombia
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#000',
                marginTop: { xs: '20px' },
              }}
            >
              La plataforma de comercio electrónico más completa de Colombia
            </Typography>
            <Box>
              <img
                src={`${process.env.PUBLIC_URL}/ASTRONAUTA VOORTEX12.png`}
                alt="Profile"
                style={{
                  width: '100%',
                  height: 'auto',
                  marginTop: '50px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
                sx={{
                  width: { xs: '20%', md: '20%', lg: '100%' },
                  height: 'auto',
                  marginTop: '50px',
                }}
              />
            </Box>
          </Box>
        </Grid>


        {/* Sección Central */}
        <Grid item xs={12} md={12} lg={3.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '10px' }}>
          <Box
            sx={{
              backgroundColor: '#161B2D',
              padding: '70px',
              borderRadius: '25px',
              boxShadow: '0 10px 100px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)',
              textAlign: 'center',
              marginTop: '40px',
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff', marginBottom: '20px' }}>
              Oferta especial termina en:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
              <Box
                sx={{
                  marginRight: '10px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  minWidth: '60px',
                  boxShadow: '0 10px 100px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold' }}>
                  {timeLeft.days}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>
                  Días
                </Typography>
              </Box>
              <Box
                sx={{
                  marginRight: '10px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  minWidth: '60px',
                  boxShadow: '0 10px 100px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold' }}>
                  {timeLeft.hours}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>
                  Hrs
                </Typography>
              </Box>
              <Box
                sx={{
                  marginRight: '10px',
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  minWidth: '60px',
                  boxShadow: '0 10px 100px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold' }}>
                  {timeLeft.minutes}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>
                  Min
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  minWidth: '60px',
                  boxShadow: '0 10px 100px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)',
                }}
              >
                <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold' }}>
                  {timeLeft.seconds}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>
                  Sec
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #5843f0, #3a2b9c)',
                color: '#fff',
                fontSize: '16px',
                borderRadius: '50px',
                padding: '15px 30px',
              }}
            >
              Conectar
            </Button>

          </Box>

          {/* Contenido adicional al final */}

          <Box
            sx={{
              backgroundColor: '#161B2D',
              padding: '20px',
              borderRadius: '25px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              marginTop: '55px',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography sx={{ color: '#fff', padding: '10px' }}></Typography>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <Typography>Proyecto By: @Scarpetta.x</Typography>
          </Box>

        </Grid>

        {/* Sección Derecha */}
        <Grid item xs={12} md={12} lg={4.25} sx={{ padding: '10px' }}>
          <Box>
            <Typography variant="h4" sx={{ color: '#000', marginLeft: '20px', fontWeight: 'bold' }}>
              Alcanza el éxito en ventas
            </Typography>

            <Typography variant="h5" sx={{ color: '#000', marginLeft: '20px' }}>
              ¡Conviértete en un top seller y obtén recompensas!
            </Typography>
            <Box sx={{ position: 'relative', width: '100%', justifyContent: 'flex-start' }}>
              <img
                src={`${process.env.PUBLIC_URL}/Capa14.png`}
                alt="Top Seller"
                style={{ width: '125%', height: 'auto', marginTop: '50px', left: '-10%', position: 'relative' }}

              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box >

  );
}

export default App;
