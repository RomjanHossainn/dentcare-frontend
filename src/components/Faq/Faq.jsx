
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import youngMan from '../../assets/young-man.jpg'
import './Faq.css'
const Faq = () => {
    
  return (
    <section className="md:flex space-y-8 items-center max-w-screen-xl mx-auto px-4 gap-24 py-24">
      <div className="flex-1">
        <div className=" space-y-5">
          <h5 className="text-2xl text-[#49AEE9]">FAQ</h5>
          <h2 className="text-3xl font-semibold">General Question</h2>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space-y-6 mt-12">
          {" "}
          <Accordion
            sx={{
              boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <AccordionSummary
              sx={{
                boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)",
              }}
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "#49AEE9", fontSize: "35px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontSize: "18px", padding: "5px" }}>
                Where Can I Find More Information?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "30px",
              }}
            >
              <Typography>
                For more details, visit our website or call our office. Our
                knowledgeable staff is ready to assist you with any inquiries
                For more details, visit our website or call our office. Our
                knowledgeable staff is ready to assist you with any inquiries
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <AccordionSummary
              sx={{
                boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)",
              }}
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "#49AEE9", fontSize: "35px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ fontSize: "18px", padding: "5px" }}>
                What Kinds of Payment Do You Accept?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "30px",
              }}
            >
              <Typography>
                We accept cash, credit cards, and insurance. Payment plans and
                financing options are available for your convenience. Contact us
                for details financing options are available for your
                convenience. Contact us for details
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <AccordionSummary
              sx={{
                boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.1)",
              }}
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "#49AEE9", fontSize: "35px" }}
                />
              }
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography style={{ fontSize: "18px", padding: "5px" }}>
                What Are Your Terms and Conditions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "30px",
              }}
            >
              {/* #F8F8F8 */}
              <Typography style={{ color: "" }}>
                Visit our website for comprehensive terms and conditions. If you
                have specific queries, feel free to contact our customer
                service. have specific queries, feel free to contact our
                customer service.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="flex-1">
        <img src={youngMan} className=" w-full md:max-w-lg mx-auto rounded-xl" alt="" />
      </div>
    </section>
  );
};

export default Faq;
