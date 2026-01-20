import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';

export default function QuickInstallButton(){
    return(
        <button className="install-btn">
        <span style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <InstallDesktopIcon />
        </span>
        Quick Install Now!
      </button>
    );
}