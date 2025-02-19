import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="footer-element">
              <Link
                className="display-6"
                style={{}}
                href={"https://teamlocker.squadlocker.com/#/lockers/grhl"}
                target="_blank"
              >
                Buy GRHL Fan Gear
              </Link>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="footer-element">
              <Link
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
                target="_blank"
                href={"https://www.facebook.com/gatewayrollerhockey"}
              >
                <Image
                  width={20}
                  height={20}
                  src={"/media/social-media/grhl-fb.avif"}
                  alt="Facebook Logo"
                />
              </Link>
              <Link
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
                target="_blank"
                href={"https://x.com/GR_HL_"}
              >
                <Image
                  width={20}
                  height={20}
                  src={"/media/social-media/grhl-x.avif"}
                  alt="X Logo"
                />
              </Link>
              <Link
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
                target="_blank"
                href={"https://www.instagram.com/gatewayrollerhockeyleague"}
              >
                <Image
                  width={20}
                  height={20}
                  src={"/media/social-media/grhl-insta.avif"}
                  alt="Instagram Logo"
                />
              </Link>
              <Link
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
                target="_blank"
                href={"https://open.spotify.com/show/7kvdyToxyiYNfhLpv1Dx7O"}
              >
                <Image
                  width={20}
                  height={20}
                  src={"/media/social-media/grhl-spotify.avif"}
                  alt="Spotify Logo"
                />
              </Link>
              <Link
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
                target="_blank"
                href={
                  "https://podcasts.apple.com/us/podcast/gateway-roller-hockey-league-podcast/id1641723497"
                }
              >
                <Image
                  width={20}
                  height={20}
                  src={"/media/social-media/grhl-am.avif"}
                  alt="Apple Music Logo"
                />
              </Link>
              <Link
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
                target="_blank"
                href={
                  "https://www.youtube.com/channel/UCUhBDeMCyeKg6XzEhBAT_dQ"
                }
              >
                <Image
                  width={20}
                  height={20}
                  src={"/media/social-media/grhl-yt.avif"}
                  alt="Youtube Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="footer-element">
              <Link
                className="display-6"
                style={{}}
                href={"/join-form"}
              >
                Join The GRHL
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-element text-center pt-3">
        <p>
          Owned and created by Joe Carnahan | All logos and images are property
          of the GRHL
        </p>
      </div>
    </footer>
  );
};
