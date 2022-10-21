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

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What is GroundWorm?</title>
        <meta name="description" content="GroundWorm Bulletin Board" />
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
                  fontSize: 18,
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
                width="215px"
                height="89px"
              />
            </Link>
            <Link href="/" target="_blank">
              <Image
                src="/about/web-app-badge.png"
                width="215px"
                height="89px"
              />
            </Link>
          </Box>
        </div>

        <Box
          component="main"
          sx={{
            p: 3,
            backgroundColor: "#4DB5CC",
            borderTop: "1px solid #000000",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et
            aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
            quia corrupti alias distinctio nostrum. Minima ex dolor modi
            inventore sapiente necessitatibus aliquam fuga et. Sed numquam
            quibusdam at officia sapiente porro maxime corrupti perspiciatis
            asperiores, exercitationem eius nostrum consequuntur iure aliquam
            itaque, assumenda et! Quibusdam temporibus beatae doloremque
            voluptatum doloribus soluta accusamus porro reprehenderit eos
            inventore facere, fugit, molestiae ab officiis illo voluptates
            recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam
            fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque,
            eligendi unde aliquid minus quis sit debitis obcaecati error,
            delectus quo eius exercitationem tempore. Delectus sapiente,
            provident corporis dolorum quibusdam aut beatae repellendus est
            labore quisquam praesentium repudiandae non vel laboriosam quo ab
            perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
            commodi nihil corrupti cum non fugiat praesentium doloremque
            architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
            molestiae dicta blanditiis est expedita eius debitis cupiditate
            porro sed aspernatur quidem, repellat nihil quasi praesentium quia
            eos, quibusdam provident. Incidunt tempore vel placeat voluptate
            iure labore, repellendus beatae quia unde est aliquid dolor
            molestias libero. Reiciendis similique exercitationem consequatur,
            nobis placeat illo laudantium! Enim perferendis nulla soluta magni
            error, provident repellat similique cupiditate ipsam, et tempore
            cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi
            vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium
            nulla. Aliquid inventore commodi reprehenderit rerum reiciendis!
            Quidem alias repudiandae eaque eveniet cumque nihil aliquam in
            expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
            dignissimos numquam at nisi porro a, quaerat rem repellendus.
            Voluptates perspiciatis, in pariatur impedit, nam facilis libero
            dolorem dolores sunt inventore perferendis, aut sapiente modi
            nesciunt.
          </Typography>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Box>
          <Link href="/" underline="none" color="inherit">
            <Typography variant="h6">GroundWorm</Typography>
          </Link>
        </Box>
        <Box display="flex">
          <Box>Terms</Box>
          <Box pl={2}>Privacy</Box>
        </Box>
      </footer>
    </div>
  );
};

export default Home;
