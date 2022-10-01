import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import Product from "./Product";
import Track from "./Track";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,Spacer,HStack
} from "@chakra-ui/react";
import Career from "./Career";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";

//importing Pratik res
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from '../NavComponents/responsive Nav/navElements'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {ChevronRightIcon } from '@chakra-ui/icons'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const[login,setLogin]=useState()
  let [arr,setArr]=useState([])
  const navigate=useNavigate()
  console.log(arr,nav)
  var token=localStorage.getItem("token")
 console.log(token)
  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("email")
    navigate("/")
    }
 

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
console.log(scrollPosition)
  let toggle=(data)=>{
    if(arr.length===0&&!arr[0]!==data){
      setArr([...arr,data])
      console.log(arr)
      setNav(true)
    }
    else if(arr.length!==0&&arr[0]===data){
      let x=[...arr]
     x.shift()
     setArr(x)
      
      setNav(false);
      console.log(arr)
    }
    else if(arr.length!==0&&arr[0]!==data){
      let x=[...arr]
     x.shift()
     x.push(data)
     
     setArr(x)
     setNav(true);
    }
  }
  return (
    <>
    <Box className={style.navheader} h="30px" backgroundColor={"pink.400"} px="4%">
    <HStack pt="4px" fontSize="14px">
      <Spacer/>
      <Text>Back to Toggl Glogal</Text>
      <Text>Product</Text>
      <Text>Blog</Text>
      <Text>Our Mission</Text>
      <Text>Working at Toggl</Text>
    </HStack>
  </Box>
    <Nav className={style.navbody} style={{position:"fixed",top:scrollPosition>=5&&"0px",width:"100%",paddingTop:"0px"}} >
    
    <div
     style={{ backgroundColor:nav&&"#FCE5D8", color: "black"}
        // : { backgroundColor: "rgb(44, 19, 56)" }
}
      className={style.navbar_main}
      
     
    >
      <div className={style.navbar_main1} style ={{marginRight:"20%"}} >
        <div className={style.navbar_sub2}  >
          <NavLink to ="/">
            <RouterLink to={"/"} >
            <svg height={"36px"} style={{marginTop:"5px"}} viewBox="0 0 167 33" fill="#E57CD8"><defs><mask id="prefix__a" fill="#fff"><path d="M.093.352h19.671v30.56H.094z"></path></mask><mask id="prefix__b" fill="#fff"><path d="M.054.352h20.41v30.56H.054z"></path></mask><mask id="prefix__c" fill="#fff"><path d="M.288.176H10.33v26.141H.288z"></path></mask><mask id="prefix__d" fill="#fff"><path d="M0 .176h14.934v26.142H0z"></path></mask><mask id="prefix__e" fill="#fff"><path d="M.215.045H14.5v22.34H.215z"></path></mask></defs><path d="M103.51 25.802a10.27 10.27 0 01-1.36.084c-1.515 0-2.651-.35-3.409-1.05-.757-.702-1.136-1.924-1.136-3.665V10.586h-3.614V8.754h3.614V4.208h2.1v4.546h4.992v1.832h-4.992v10.686c0 .905.184 1.578.551 2.02.367.44 1.033.66 1.997.66.528 0 .987-.021 1.377-.067.39-.045.78-.102 1.17-.17v1.833c-.436.113-.866.197-1.29.254"></path><path d="M19.761 26.378c-.049-1.438-.48-2.962-1.577-3.966-1.226-1.12-3-1.635-4.648-1.635H6.19c-.725 0-1.369-.537-1.369-1.2 0-.557.386-1.024.91-1.16-.002 0 .123-.032.258-.074 1.315.622 2.799.903 4.28.903 2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.375-5.71A7.532 7.532 0 0014.9 4.533c1.56.356 3.17-.085 4.28-1.97L16.058.353l-2.606 3.573a10.55 10.55 0 00-3.184-.473c-2.265 0-4.537.656-6.199 2.188-1.619 1.49-2.375 3.575-2.375 5.709 0 2.134.756 4.218 2.375 5.71.14.13.286.252.435.37l-.303.158c-.599.33-1.33.857-2.054 1.617C1.12 20.28.094 21.894.094 24.038c0 0-.143 4.578 5.192 4.578h3.865c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.737-2.962 1.683-4.534M8.958 9.938c.365-.36.865-.515 1.363-.515s.997.155 1.362.515c.356.35.522.841.522 1.343s-.166.992-.522 1.343c-.365.36-.864.515-1.362.515-.498 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343" mask="url(#prefix__a)" transform="translate(36.876 1.913)"></path><path d="M20.46 26.378c-.05-1.438-.48-2.962-1.578-3.966-1.225-1.12-2.999-1.635-4.647-1.635l-8.529-.061c-.537 0-.948-.333-.948-.824 0-.405.204-1.009.718-1.11a10.56 10.56 0 003.152.464c2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.374-5.71a7.532 7.532 0 00-1.567-1.107c1.56.356 3.17-.085 4.279-1.97L14.418.353l-2.605 3.573a10.557 10.557 0 00-3.185-.473c-2.265 0-4.536.656-6.199 2.188C.81 7.13.054 9.215.054 11.349c0 2.134.757 4.218 2.375 5.71.48.441 1.01.81 1.576 1.111-.374.28-.767.623-1.16 1.034C1.82 20.28.793 21.894.793 24.038c0 0-.142 4.578 5.193 4.578H9.85c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.738-2.962 1.683-4.534M7.37 9.938c.365-.36.864-.515 1.363-.515.498 0 .997.155 1.363.515.355.35.522.841.522 1.343s-.167.992-.522 1.343c-.366.36-.865.515-1.363.515-.499 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343" mask="url(#prefix__b)" transform="translate(57.22 1.913)"></path><path d="M10.33 25.7v-6.833c-1.592.199-2.146-.907-2.146-2.006V.176H.288v17.932c0 2.227.336 4.084 1.151 5.252 1.253 1.779 2.947 2.943 6.317 2.957.622-.027 1.66-.148 2.574-.617" mask="url(#prefix__c)" transform="translate(76.294 .242)"></path><path d="M34.297 8.345c-2.04-2.05-4.823-2.929-7.602-2.929-2.778 0-5.563.88-7.6 2.929-1.986 1.996-2.913 4.787-2.913 7.643 0 2.857.927 5.647 2.912 7.643 2.038 2.05 4.823 2.928 7.601 2.928 2.779 0 5.563-.878 7.602-2.928 1.984-1.996 2.912-4.787 2.912-7.643s-.928-5.648-2.912-7.643m-5.884 9.287c-.472.466-1.117.664-1.76.664-.644 0-1.289-.198-1.76-.664-.46-.453-.675-1.087-.675-1.735 0-.649.214-1.282.674-1.735.472-.465 1.117-.665 1.76-.665.644 0 1.29.2 1.761.665.46.453.675 1.086.675 1.735 0 .648-.215 1.282-.675 1.735"></path><path d="M13.335 18.894c-1.314 0-1.851-.396-2.337-1.004-.314-.397-.47-.98-.47-1.736v-3.537h4.406v-6.34h-4.407V.176H4.894v2.28c0 2.527-1.953 4.576-4.362 4.576A4.29 4.29 0 010 6.997v5.62h2.958v5.648c0 2.222.407 3.935 1.22 5.101 1.257 1.785 2.65 2.952 6.051 2.952 1.972 0 3.623-.447 4.705-1.043v-6.643c-.408.154-.96.262-1.6.262" mask="url(#prefix__d)" transform="translate(0 .242)"></path><path d="M111.889 9.232c.918-.702 2.03-1.053 3.339-1.053.482 0 1.044.058 1.687.17v2.172a7.246 7.246 0 00-.895-.136 10.122 10.122 0 00-.827-.034c-1.01 0-1.853.192-2.53.577a4.564 4.564 0 00-1.635 1.56c-.413.656-.706 1.436-.878 2.341a15.462 15.462 0 00-.258 2.884v7.837h-2.1V8.587h2.031v3.868c.46-1.448 1.148-2.522 2.066-3.223M119.46 10.656a4.602 4.602 0 011.307-1.306c.551-.373 1.217-.661 1.997-.865.78-.204 1.71-.306 2.789-.306 2.294 0 3.993.52 5.094 1.561 1.102 1.04 1.653 2.602 1.653 4.682V25.55h-2.1v-3.63c-.528 1.29-1.348 2.273-2.462 2.951-1.113.679-2.392 1.019-3.838 1.019-.941 0-1.773-.131-2.496-.39-.723-.26-1.325-.617-1.807-1.07a4.477 4.477 0 01-1.102-1.628 5.443 5.443 0 01-.378-2.035c0-1.584.521-2.794 1.566-3.63 1.044-.838 2.358-1.335 3.942-1.494l5.714-.542c.574-.068.86-.305.86-.713v-.61c0-1.154-.355-2.065-1.066-2.731-.712-.667-1.87-1.001-3.477-1.001-2.915 0-4.602 1.063-5.06 3.189l-1.86-.985a5.88 5.88 0 01.723-1.594zm4.474 6.92c-1.308.137-2.237.504-2.788 1.104-.55.6-.826 1.295-.826 2.087 0 .972.327 1.747.98 2.323.655.577 1.613.865 2.876.865.963 0 1.818-.164 2.564-.491a5.93 5.93 0 001.894-1.29 5.375 5.375 0 001.17-1.815 5.661 5.661 0 00.396-2.07V16.9l-6.266.678zM135.391 13.54a8.278 8.278 0 011.825-2.833 8.198 8.198 0 012.857-1.866c1.113-.441 2.347-.661 3.7-.661 1.24 0 2.359.192 3.357.576a7.86 7.86 0 012.633 1.663l-1.342 1.628a7.786 7.786 0 00-2.186-1.374 6.632 6.632 0 00-2.565-.491c-.986 0-1.893.163-2.72.491a6.328 6.328 0 00-2.134 1.374c-.596.588-1.061 1.312-1.394 2.171-.332.86-.499 1.81-.499 2.85s.167 1.985.5 2.833a6.286 6.286 0 001.393 2.171 6.196 6.196 0 002.135 1.392 7.211 7.211 0 002.685.492c.964 0 1.865-.176 2.702-.526.838-.35 1.59-.82 2.255-1.408l1.273 1.628c-.734.679-1.617 1.233-2.65 1.662-1.033.43-2.215.645-3.546.645-1.354 0-2.582-.22-3.683-.661-1.102-.441-2.043-1.052-2.823-1.832a7.854 7.854 0 01-1.79-2.8c-.413-1.085-.62-2.272-.62-3.562 0-1.289.212-2.476.637-3.562"></path><path mask="url(#prefix__e)" d="M2.315 17.329v5.055h-2.1V.044h2.1v14.639l9.053-9.262h2.961l-7.47 7.396 7.642 9.567h-2.754l-6.3-8.142z" transform="translate(152.165 3.166)"></path></svg>
            </RouterLink>
          </NavLink>
          <Bars onClick={onOpen} />
          {/* Drawer */}
          <Drawer  placement={placement} onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
              <DrawerContent minWidth={"100%"} backgroundColor={"#FCE5D8"}>
                <DrawerHeader borderBottom='1px solid grey'>
                  <h1
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                      color: "#e57cd8",
                      fontWeight: "700",
                    }}
                  >
                    toggl track
                  </h1>
                  <DrawerCloseButton mt={"15px"} fontSize= "20px" fontWeight="700" />
                  </DrawerHeader>
                <DrawerBody padding={"20px"}>
                 <Link to="*"> <p className={style.navabarlinks} >Products <ChevronRightIcon/></p></Link>
                  
                 <Link to="*"> <p  className={style.navabarlinks} >Pricing </p></Link>
                 <Link to="*"> <p  className={style.navabarlinks} >Why Track? <ChevronRightIcon/></p></Link>
                 <Link to="*"> <p  className={style.navabarlinks} >Careers <ChevronRightIcon/></p></Link>
                 <Link to="*"> <p  className={style.navabarlinks} >Book a Demo </p></Link>

                  {/* <div> */}
                    <button ClassName={style.navbarbtn} style={{backgroundColor:"#E57CD8",padding:"10px",color:"white",borderRadius:"20px",marginLeft:"42.5%" ,marginTop:"30px",fontWeight:"bold"}} onClick={()=>navigate("*")}>Try for free</button>
<p style={{padding:"10px",textAlign:"center" ,marginTop:"20px",fontWeight:"bold"}}>Login</p>

                  {/* </div> */}
                </DrawerBody>
              </DrawerContent>
        </Drawer>

          {/* Drawer Ends */}

          <NavMenu >
          

          <Accordion
            allowToggle
            display="flex"
            
            style={
              
              nav === false
                ? { borderTop: "0px solid #FCE5D8" }
                : { borderTop: "0px solid rgb(44, 19, 56)" }
            }
            className={style.toogle1} >

            {/* <NavLink to = "/produts"> */}
          
            <AccordionItem style={{border:"none"}}>
              <h2 >
                <AccordionButton
                  background="rgb(44, 19, 56) "
                  border="#412a4c "
                  flex="1"
                  style={
                    nav === true
                      ? { background: "#FCE5D8", color: "black" }
                      : { background: "rgb(44, 19, 56)" }
                  }
                  onClick={() => {
                   toggle(1)
                   
                  }}
                  fontSize="15px"
                >
                 
                    Product
                  {/* </Box> */}
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black",textDecoration:"underline" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1} top={scrollPosition>=5&&"80px"} style={{padding:"0px"}}>
                {/* <div > */}
                  <Product />
                {/* </div> */}
              </AccordionPanel>
            </AccordionItem>
            {/* </NavLink> */}

            <NavLink to = "/Prices">         
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <RouterLink to={"/Prices"} style={{fontSize:"15px",lineHeight:"30px"}}>
                    
                      Pricing
                    {/* </Box> */}
                  </RouterLink>
                </AccordionButton>
              </h2>
            </AccordionItem >
            </NavLink>
            
            {/* <NavLink to = "/track"> */}
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                  onClick={() => {
                    toggle(2)
                  }}
                  fontSize="15px"
                >
                 
                    WhyTrack
                  {/* </Box> */}
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1} top={scrollPosition>=5&&"80px"} padding="0px" >
                <div className={style.navbar_track}>
                  <Track />
                </div>
              </AccordionPanel>
            </AccordionItem>
            {/* </NavLink> */}

            <div className={style.line}></div>
            {/* <NavLink to = "/career"> */}
            <AccordionItem style={{border:"none"}}>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                  onClick={() => {
                    toggle(3)
                  }}
                  fontSize="15px"
                >
                  
                    Careers
                  {/* </Box> */}
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1} top={scrollPosition>=5&&"80px"}>
                <div className={style.navbar_careers}>
                  <Career />
                </div>
              </AccordionPanel>
            </AccordionItem>
            {/* </NavLink> */}


            <div className={style.line}></div>
          </Accordion>
          </NavMenu>

        
        </div> 
      </div>
  

      <NavBtn >
      {/* <div className={style.navbar_main2}>

      <NavLink to = "/demo">
        <div
          className={style.navbar_book}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null 
          }>
        
          <Link to={"/demo"}>Book a demo</Link>
        </div>
        </NavLink>

        <div className={style.navbar_hr}></div>
        <NavLink to = "/login">
        <div
          className={style.navbar_log}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null
          }
        >
          {" "}
          <Link to={"/login"}>Log in</Link>
        </div>
        </NavLink>

        <NavBtnLink to="/signin">
        {/* <button
          className={style.navbar_free}
          style={
            nav === true
              ? { backgroundColor: "#E57CD8", color: "black", border: "none" }
              : {
                  backgroundColor: "#FFF3ED",
                  color: "#E57CD8",
                  border: "none ",
                }
          }
        >
          try for free
        </button> */}
        {/* Try for free
        </NavBtnLink>
      </div> */} 

          <NavLink to = "/BookDemo" >
            <Text color={nav&&"black"} fontWeight={nav&&"bold"}>
                      Book a demo 
                      </Text> 
                      
                      </NavLink>
                      
                      {
                      token?
                      <NavLink to="/">
                       <Button color="black" onClick={handleLogout}>Logout</Button>  
                      </NavLink>
                      
                        :
                        <NavLink to = "/login">
                       <RouterLink to="/login"><Button color="black" fontWeight={nav&&"bold"} style={nav?{background:"#FCE5D8"}:null}>Login</Button></RouterLink>  
                      </NavLink>
                      
                      
                      }
            <NavBtnLink style={nav?{background:"#e57cd8",color:"black"}:null} to="/signup">
                Try for free
            </NavBtnLink>
      </NavBtn>
    </div>
    
    </Nav>

    </>
  );
};

export default Navbar;