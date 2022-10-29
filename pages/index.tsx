import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What is GroundWorm? A Location Based Bulletin Board App</title>
        <meta
          name="description"
          content="A community social platform that keeps you updated with what's happening around you. Create geo targeted post to broadcast your info to your neighborhood."
        />

        <meta
          property="og:title"
          content="What is GroundWorm? A Location Based Bulletin Board App"
        />
        <meta
          property="og:description"
          content="A community social platform that keeps you updated with what's happening around you. Create geo targeted post to broadcast your info to your neighborhood."
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
          content="What is GroundWorm? A Location Based Bulletin Board App"
        />
        <meta
          name="twitter:description"
          content="A community social platform that keeps you updated with what's happening around you. Create geo targeted post to broadcast your info to your neighborhood."
        />
        <meta
          name="twitter:image"
          content="https://groundworm.com/about/groundworm.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GroundWormBB" />

        <link rel="icon" href="/about/favicon.ico" />
      </Head>

      <main className={styles.main}>
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

        <div className={styles.darkenpic}>
          <Box pl={2} pr={2} pb={24} textAlign="center">
            <Typography
              variant="h3"
              fontWeight={"bold"}
              fontStyle={"italic"}
              className={styles.piccontent}
            >
              Location Based Bulletin Board
            </Typography>
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
                width="215px"
                height="89px"
              />
            </Link>
            <Link
              href="https://appgallery.huawei.com/app/C105635521"
              target="_blank"
            >
              <Image
                src="/about/huawei-appgallery-badge.png"
                alt="Huawei AppGallery Badge for GroundWorm"
                width="215px"
                height="89px"
              />
            </Link>
            <Link href="/" target="_blank">
              <Image
                src="/about/web-app-badge.png"
                alt="Web App Badge for GroundWorm"
                width="215px"
                height="89px"
              />
            </Link>
          </Box>
        </div>

        <Box component="main" pl={3} pr={3} pt={10} pb={10}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography variant="h2" maxWidth={1000} textAlign="center">
              Share information with your neighborhood
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} pt={2}>
            <Typography maxWidth={600} textAlign="center">
              Anyone can broadcast your information to your neighborhood,
              connect with your target audiences, increase visiblity on your
              products, or promote your businesses to the people nearby.
            </Typography>
          </Box>
        </Box>

        <Box
          component="main"
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
          pl={3}
          pr={3}
          pt={10}
          pb={10}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Typography variant="h2" maxWidth={1000} textAlign="center">
              Geotargeting advertising
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} pt={2}>
            <Typography maxWidth={600} textAlign="center">
              Post geo-targeted ads for free at GroundWorm Bulletin Board to
              reach your potential customers nearby. At the same time increase
              your brand awareness in your neighborhood.
            </Typography>
          </Box>
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
              p={3}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #FFFFFF"}
              borderRight={"1px solid #FFFFFF"}
            >
              <Box>
                <Typography variant="h4">GroundWorm Blog</Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  {"Visit our blog for latest updates, and tips and tricks."}
                </Typography>
              </Box>
              <Box pt={8}>
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
              p={3}
              item
              xs={4}
              sm={6}
              md={6}
              borderTop={"1px solid #FFFFFF"}
              borderRight={"1px solid #FFFFFF"}
            >
              <Box>
                <Typography variant="h4">Contact us</Typography>
              </Box>
              <Box>
                <Typography variant="h6">
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
                <Typography variant="h6">
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
                    width="215px"
                    height="89px"
                  />
                </Link>
                <Link
                  href="https://appgallery.huawei.com/app/C105635521"
                  target="_blank"
                >
                  <Image
                    src="/about/huawei-appgallery-badge.png"
                    alt="Huawei AppGallery Badge for GroundWorm"
                    width="215px"
                    height="89px"
                  />
                </Link>
                <Link href="/" target="_blank">
                  <Image
                    src="/about/web-app-badge.png"
                    alt="Web App Badge for GroundWorm"
                    width="215px"
                    height="89px"
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

      <footer className={styles.footer}>
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
            <Link
              href="https://www.youtube.com/channel/UC0nf6-eeutbSDG-5iN5PSng"
              target="_blank"
            >
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
            <Link
              href="https://www.pinterest.com/groundwormapp"
              target="_blank"
            >
              <Image
                src="/about/pinterest_grey.png"
                alt="Pinterest of GroundWorm"
                width="32"
                height="32"
              />
            </Link>
          </Box>
        </Box>
        <Box display="flex" pt={2} pb={4} color={"grey"}>
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
