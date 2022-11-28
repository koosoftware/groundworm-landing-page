import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import YouTube from 'react-youtube';

const Home: NextPage = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          padding: 0 0rem;
        }

        .main {
          min-height: 100vh;
          padding: 0rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .footer {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #000000;
          justify-content: center;
          align-items: center;
          background-color: #eeeeee;
        }

        .footer a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title {
          text-align: center;
        }

        @media (prefers-color-scheme: dark) {
          .card,
          .footer {
            border-color: #222;
          }
          .code {
            background: #111;
          }
        }

        .darkenpic {
          width: 100%;
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .piccontent {
          text-align: center;
          color: white;
          font-size: 36pt;
        }

        .darkenpic::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.9),
              rgba(0, 0, 0, 0.1) 20%
            ),
            linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1) 40%),
            url("/about/bulletin-board.webp");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
          z-index: -1;
          filter: brightness(90%);
          width: 100%;
          height: 100vh;
        }
      `}</style>
      <Head>
        <title>What is GroundWorm? A Location Based Community Forum App</title>
        <meta
          name="description"
          content="Location based community forum that keeps you updated with what's happening around you. Create geo targeted post to broadcast your info to your neighborhood."
        />

        <meta
          property="og:title"
          content="What is GroundWorm? A Location Based Community Forum App"
        />
        <meta
          property="og:description"
          content="Location based community forum that keeps you updated with what's happening around you. Create geo targeted post to broadcast your info to your neighborhood."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://groundworm.com/about/groundworm.png"
        />
        <meta property="og:url" content="https://groundworm.com" />
        <meta property="fb:app_id" content="725813565065709" />
        <meta
          name="twitter:title"
          content="What is GroundWorm? A Location Based Community Forum App"
        />
        <meta
          name="twitter:description"
          content="Location based community forum that keeps you updated with what's happening around you. Create geo targeted post to broadcast your info to your neighborhood."
        />
        <meta
          name="twitter:image"
          content="https://groundworm.com/about/groundworm.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GroundWormBB" />

        <link rel="icon" href="/about/favicon.ico" />
      </Head>

      <main className="main">
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "white",
            color: "black",
            borderBottom: "1px solid #000000",
          }}
          elevation={0}
        >
          <Toolbar>
            <Link href="/" underline="none" color="inherit">
              <Image
                src="/about/groundworm.png"
                alt="GroundWorm Logo"
                width={36}
                height={36}
              />
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, paddingLeft: 1 }}
            >
              <Link href="/" underline="none" color="inherit">
                GroundWorm
              </Link>
            </Typography>
            <Link href="/" underline="none" color="inherit">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  fontSize: 17,
                  backgroundColor: "#4DB5CC",
                  "&:hover": {
                    backgroundColor: "#4DB5CC",
                  },
                  textTransform: "none",
                  borderRadius: "28px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                Get started
              </Button>
            </Link>
          </Toolbar>
        </AppBar>

        <div className="darkenpic">
          <Box pl={2} pr={2} pb={24} textAlign="center">
            <h1 className="piccontent">
              <b>
                <i>Location Based Bulletin Board</i>
              </b>
            </h1>
          </Box>
          <Box
            flex={"display"}
            paddingBottom={6}
            textAlign={"center"}
            position="absolute"
            bottom="0"
            left="0"
            right="0"
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.groundworm.android"
              target="_blank"
            >
              <Image
                src="/about/google-play-badge.png"
                alt="Google Play Badge for GroundWorm"
                width="200px"
                height="77px"
              />
            </Link>
            <Link
              href="https://appgallery.huawei.com/app/C105635521"
              target="_blank"
            >
              <Image
                src="/about/huawei-appgallery-badge.png"
                alt="Huawei AppGallery Badge for GroundWorm"
                width="200px"
                height="77px"
              />
            </Link>
            <Link href="/" target="_blank">
              <Image
                src="/about/web-app-badge.png"
                alt="Web App Badge for GroundWorm"
                width="200px"
                height="77px"
              />
            </Link>
          </Box>
        </div>

        <Box component="main" pl={3} pr={3} pt={6} pb={3}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography variant="h2" maxWidth={1000} textAlign="center">
              Community forum based on location
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} pt={2}>
            <Typography maxWidth={600} textAlign="center">
              GroundWorm is a community forum platform where people in the same
              location can share localized information, have discussion on a
              localized topic, or seeking help from the local people.
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <Grid container columns={{ xs: 4, sm: 6, md: 12 }}>
              <Grid
                item
                xs={4}
                sm={6}
                md={6}
              >
                <Image
                  src="/about/forum.png"
                  alt="GroundWorm Location Based Community Forum"
                  width="470px"
                  height="394px"
                />
              </Grid>
              <Grid
                pt={4}
                pb={4}
                item
                xs={4}
                sm={6}
                md={6}
              >
                <YouTube videoId="OhrEofzheP0" opts={{
                  height: '320',
                  width: '100%',
                  playerVars: {
                    autoplay: 1,
                  },
                }} />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box component="main">
          <Grid container columns={{ xs: 4, sm: 6, md: 12 }}>
            <Grid
              pl={3}
              pr={3}
              pt={6}
              pb={6}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #000000"}
              borderLeft={"1px solid #000000"}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h2" maxWidth={1000} textAlign="center">
                  Share information with your neighborhood
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"} pt={2}>
                <Typography maxWidth={600} textAlign="center">
                  Anyone can broadcast your information in the form of text,
                  photos or videos to your neighborhood, connect with your
                  target audiences, increase visibility on your products, or
                  promote your businesses to the people nearby in GroundWorm
                  location based community forum.
                </Typography>
              </Box>
            </Grid>
            <Grid
              pl={3}
              pr={3}
              pt={6}
              pb={6}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #000000"}
              borderLeft={"1px solid #000000"}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h2" maxWidth={1000} textAlign="center">
                  {"Keeps you updated with what's happening around you"}
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"} pt={2}>
                <Typography maxWidth={600} textAlign="center">
                  {
                    "Refresh the GroundWorm community forum app whenever you are at a different location to see posts only from your current location. Any new restaurants nearby, any events in your neighborhood, any nice photos or videos of a tourist attraction, it's all at your fingertips."
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="main"
          sx={{
            backgroundColor: "#4FA244",
            color: "white",
          }}
          pl={3}
          pr={3}
          pt={6}
          pb={3}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Typography variant="h2" maxWidth={1000} textAlign="center">
              Geotargeting advertising
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} pt={2}>
            <Typography maxWidth={600} textAlign="center">
              Post geo-targeted ads for free at GroundWorm location based
              community forum to reach your potential customers nearby. At the
              same time increase your brand awareness in your neighborhood.
            </Typography>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src="/about/geotargeted-ads.png"
              alt="Post geotargeted ads at GroundWorm community forum"
              width="897px"
              height="588px"
            />
          </Box>
        </Box>

        <Box
          component="main"
          sx={{
            backgroundColor: "#4FA244",
            color: "white",
          }}
        >
          <Grid container columns={{ xs: 4, sm: 6, md: 12 }}>
            <Grid
              pl={3}
              pr={3}
              pt={6}
              pb={6}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #FFFFFF"}
              borderRight={"1px solid #FFFFFF"}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h2" maxWidth={1000} textAlign="center">
                  Classified ads
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"} pt={2}>
                <Typography maxWidth={600} textAlign="center">
                  {
                    "Create local ads related to jobs hiring, housing for sale, services, local community, and events for free. It empowers you to focus on the areas where you'll find the right customers, and exclude areas where you won't."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid
              pl={3}
              pr={3}
              pt={6}
              pb={6}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #FFFFFF"}
              borderRight={"1px solid #FFFFFF"}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h2" maxWidth={1000} textAlign="center">
                  {"Sell or give away used items"}
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"center"} pt={2}>
                <Typography maxWidth={600} textAlign="center">
                  {
                    "Have a voucher that is going to expire soon? Have some items that you are not going to use anymore? Just post it up to GroundWorm community forum app. There is higher chance to close the deal due to distance advantage."
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="main"
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Grid container columns={{ xs: 4, sm: 6, md: 12 }}>
            <Grid
              pl={3}
              pr={3}
              pt={6}
              pb={6}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #FFFFFF"}
              borderRight={"1px solid #FFFFFF"}
            >
              <Box>
                <Typography variant="h3" fontSize={36}>
                  GroundWorm Blog
                </Typography>
              </Box>
              <Box pt={2}>
                <Typography>
                  {"Visit our blog for latest updates, and tips and tricks."}
                </Typography>
              </Box>
              <Box pt={4}>
                <Link href="https://groundworm.com/blog" underline="none">
                  <Button
                    variant="outlined"
                    disableElevation
                    sx={{
                      color: "#4DB5CC",
                      borderColor: "#4DB5CC",
                      "&:hover": {
                        borderColor: "#4DB5CC",
                      },
                      fontSize: 22,
                      textTransform: "none",
                      borderRadius: "28px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      paddingLeft: 2,
                      paddingRight: 2,
                    }}
                  >
                    Read our blog
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid
              pl={3}
              pr={3}
              pt={6}
              pb={6}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #FFFFFF"}
              borderRight={"1px solid #FFFFFF"}
            >
              <Box>
                <Typography variant="h3" fontSize={36}>
                  Contact us
                </Typography>
              </Box>
              <Box pt={2}>
                <Typography>
                  {
                    "Email or get in touch with us to leave your comment, suggest a feature or report a bug."
                  }
                </Typography>
              </Box>
              <Box pt={4}>
                <Link href="mailto:support@groundworm.com" underline="none">
                  <Button
                    variant="outlined"
                    disableElevation
                    sx={{
                      color: "#4DB5CC",
                      borderColor: "#4DB5CC",
                      "&:hover": {
                        borderColor: "#4DB5CC",
                      },
                      fontSize: 22,
                      textTransform: "none",
                      borderRadius: "28px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      paddingLeft: 2,
                      paddingRight: 2,
                    }}
                  >
                    Email us
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="main"
          sx={{
            backgroundColor: "#4DB5CC",
            borderTop: "1px solid #000000",
          }}
        >
          <Grid container columns={{ xs: 4, sm: 6, md: 12 }}>
            <Grid p={3} item xs={4} sm={6} md={6}>
              <Box pt={2} textAlign="center">
                <Typography variant="h4">GET THE APP!</Typography>
              </Box>
              <Box pt={4} pb={4} textAlign="center">
                <Typography>
                  {
                    "Download or visit our app to keep you updated with what's happening around you."
                  }
                </Typography>
              </Box>
              <Box flex={"display"} textAlign="center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.groundworm.android"
                  target="_blank"
                >
                  <Image
                    src="/about/google-play-badge.png"
                    alt="Google Play Badge for GroundWorm"
                    width="200px"
                    height="77px"
                  />
                </Link>
                <Link
                  href="https://appgallery.huawei.com/app/C105635521"
                  target="_blank"
                >
                  <Image
                    src="/about/huawei-appgallery-badge.png"
                    alt="Huawei AppGallery Badge for GroundWorm"
                    width="200px"
                    height="77px"
                  />
                </Link>
                <Link href="/" target="_blank">
                  <Image
                    src="/about/web-app-badge.png"
                    alt="Web App Badge for GroundWorm"
                    width="200px"
                    height="77px"
                  />
                </Link>
              </Box>
              <Box pt={2} textAlign="center">
                <Image
                  src="/about/qr-code.png"
                  alt="QR code link for GroundWorm App"
                  width="180px"
                  height="180px"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sm={6}
              md={6}
              textAlign="center"
              pt={3}
              alignSelf={"flex-end"}
            >
              <Box position="relative" bottom={-5}>
                <Image
                  src="/about/screenshots.png"
                  alt="Screenshots of GroundWorm App"
                  width="400px"
                  height="350px"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>

      <footer className="footer">
        <Box pb={2}>
          <Link href="/" underline="none" color="inherit">
            <Typography variant="h5">GroundWorm</Typography>
          </Link>
        </Box>
        <Box display="flex">
          <Box p={1}>
            <Link href="https://fb.me/groundworm" target="_blank">
              <Image
                src="/about/facebook_grey.png"
                alt="Facebook Page of GroundWorm"
                width="32"
                height="32"
              />
            </Link>
          </Box>
          <Box p={1}>
            <Link href="https://twitter.com/GroundWormBB" target="_blank">
              <Image
                src="/about/twitter_grey.png"
                alt="Twitter of GroundWorm"
                width="32"
                height="32"
              />
            </Link>
          </Box>
          <Box p={1}>
            <Link href="https://www.youtube.com/@GroundWormBB" target="_blank">
              <Image
                src="/about/youtube_grey.png"
                alt="Youtube Channel of GroundWorm"
                width="32"
                height="32"
              />
            </Link>
          </Box>
          <Box p={1}>
            <Link
              href="https://www.instagram.com/groundwormapp/"
              target="_blank"
            >
              <Image
                src="/about/instagram_grey.png"
                alt="Instagram of GroundWorm"
                width="32"
                height="32"
              />
            </Link>
          </Box>
          <Box p={1}>
            <Link href="https://www.pinterest.com/GroundWormBB" target="_blank">
              <Image
                src="/about/pinterest_grey.png"
                alt="Pinterest of GroundWorm"
                width="32"
                height="32"
              />
            </Link>
          </Box>
        </Box>
        <Box display="flex" pt={2} pb={4}>
          <Box pl={2} pr={2}>
            <Link
              href="https://groundworm.com/terms-of-use.html"
              target="_blank"
              color="inherit"
            >
              Terms
            </Link>
          </Box>
          <Box pl={2} pr={2}>
            <Link
              href="https://groundworm.com/privacy-policy.html"
              target="_blank"
              color="inherit"
            >
              Privacy
            </Link>
          </Box>
          <Box pl={2} pr={2}>
            <Link
              href="https://groundworm.com/disclaimer.html"
              target="_blank"
              color="inherit"
            >
              Disclaimer
            </Link>
          </Box>
        </Box>
      </footer>
    </div>
  );
};

export default Home;
