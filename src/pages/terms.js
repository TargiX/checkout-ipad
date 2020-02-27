import React, { useContext, useEffect, useState, useRef } from 'react'
import { Form,  Button, Container, Row, Col } from 'react-bootstrap'
import { Formik,  Field } from 'formik';
import * as yup from 'yup';
import Footer from '../components/Footer'
import { store } from '../store';
import PhoneInput from 'react-phone-input-2'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import 'react-phone-input-2/lib/style.css'
import SignatureCanvas from 'react-signature-canvas'


const Terms = () => {
   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const history = useHistory();
   
   let today = new Date();
   let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

   const [confirmButton, setConfirmButton] = useState(true)
   const signature = useRef(null);

   const [checkboxes, setCheckboxes] = useState({
      javascript: false,
      javascript2: false,
      javascript3: false,
      javascript4: false,
      javascript31: false,
      javascript5: false,
      javascript6: false,
      javascript7: false,
      javascript41: false,
      javascript42: false,
      javascript43: false,
      javascript44: false,
      javascript51: false,
      javascript61: false,
      javascript62: false,
      javascript63: false,
      javascript71: false,
      javascript72: false,
      javascript81: false,
      javascript91: false,
      javascript92: false,
      javascript93: false,
      javascript101: false,
      javascript102: false,
      javascript111: false,
      javascript121: false,
      javascript131: false,
      javascript132: false,
      javascript133: false,
      javascript151: false,
      javascript152: false,
      javascript16: false,
      javascript17: false,
   })

   const [errorMessage, setError] = useState('')

   const getSignature = () => {

     
   }

   const handleSubmit = async (event) => {

      let params =  {
         userData: state.userData,
         parent: state.parent,
         signature: signature.current.getCanvas().toDataURL()
      }
      
      const result = await axios.post(
         `https://booking.staging.dzmanage.com/api/v1/saveSlotDetails/${state.bookingId}/`,
      params);


      console.log(result)
      if (result.data.success) {
            history.push("/final-confirm")
     
         }
   }

   const updateChecked = (event) => {
      // console.log(event.target.checked)
      // console.log(event.target.id)
      // console.log(checkboxes)   
      setCheckboxes({...checkboxes, [event.target.id]: event.target.checked})
   }

   const signatureTouched = () => {
      if (!Object.values(checkboxes).includes(false) ) {
         setConfirmButton(false) // 'Confirm' button become active
     } 
   }

   useEffect(() => {
    if (!Object.values(checkboxes).includes(false) && !signature.current.isEmpty()) {
        setConfirmButton(false) // 'Confirm' button become active
    } else {
      setConfirmButton(true) // 'Confirm' button stays disabled
    } 
  },  [checkboxes, signature.current]);

   

   let firstName = state.user ? state.user.details.firstName : 'John'
   let lastName = state.user ? state.user.details.lastName : 'Smith'

   return (
      <>
         <Container id="terms" className="" >
            <Row >
               <Col md="12"  className="confirm-item__label" >
                  <div className="information_wrap">
                     <div className="information_inner">
                           <h2>GoJump America LLC Jumper Information:</h2>
                           <table>
                              <tbody>
                                 <tr>
                                       <td>Name</td>
                                       <td>{firstName} {lastName}</td>
                                 </tr>
                                 <tr>
                                       <td>Address</td>
                                 </tr>
                              </tbody>
                           </table>
                     </div>

                     <div className="information_legal">
                        <h2>IMPORTANT LEGAL DOCUMENT / READ CAREFULLY</h2>
                        <h3>GoJump Oceanside, Inc.</h3>
                        <p>ASSUMPTION OF RISKS AND HAZARDS, WAIVER OF RIGHTS, RELEASE AND INDEMNITY AGREEMENT</p>
                        <p><strong>WARNING!!!!</strong> By signing this document you are giving up valuable legal rights in the event you should be injured and attempt to sue someone for your injuries. You will probably not be able to win your lawsuit even though someone other than yourself was legally at fault. You further are granting us the express authority to summon emergency and medical care for you in the event you are incapacitated and hereby are agreeing to be financially responsible for any such service summoned on your behalf.</p>
                        <p><strong>ATTENTION!!!! YOU MAY NOT SKYDIVE WITHIN 24 HOURS OF YOUR LAST SCUBA DIVE.</strong></p>
                        <p><strong>FURTHERMORE,</strong> there is no insurance coverage provided by the Released Parties for any injuries that may happen to you while parachuting, skydiving or riding in an aircraft, and even if insurance exists, this document is intended to waive and release your right to collect any such insurance benefits.</p>
                        <p><strong>NOTICE!!!!</strong> There are a number of other parachuting schools that you may choose if you do not want to sign this Assumption of Risks and Hazards, Waiver of Rights, Release and Indemnity. Ask the instructor for a list if you do not want to sign this document and it will be furnished to you</p>
                        <p><strong>DO NOT SIGN THIS DOCUMENT</strong> until after you have thoroughly read it and you have had an opportunity to think about the consequences of signing this form and discuss them with whomever you desire, including an attorney of your choice</p>
                        <h2>IMPORTANT LEGAL DOCUMENT / READ CAREFULLY</h2>
                        <p>I acknowledge I have read, understand and agree to all of the above:</p>
                        <p className="mb-0">{firstName} {lastName}</p>
                        <p className="sign">
                        <SignatureCanvas penColor='black'
                           canvasProps={{width: 180, height: 80, className: 'sigPad'}} />
                           </p>
                        <p>Date: {date}</p>

                        <h3>INDEMNITY AGREEMENT & RELEASE OF LIABILITY ACKNOWLEDGMENT OF RISK AND HAZARDS</h3>
                        <h2>ELECTRONIC SIGNATURE CONSENT:</h2>
                        <p>By initialing below, you are consenting to the use of your electronic signature in lieu of an original signature on paper. You have the right to request that you sign a paper copy instead. By checking here, you are waiving that right. After consent, you may, upon written request to us, obtain a paper copy of an electronic record. No fee will be charged for such copy and no special hardware or software is required to view it. Your agreement to use an electronic signature with us for any documents will continue until such time as you notify us in writing that you no longer wish to use an electronic signature. There is no penalty for withdrawing your consent. Furthermore, you understand and agree that "check boxes" will be used in lieu of signatures and initials. By checking the "boxes" below, you indicate that you understand and agree to all of the information and terms contained in each paragraph of this multi-page agreement. I agree with the Electronic Signature Consent <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript"/><label htmlFor="javascript"></label></span>.</p>
                        <h2>ASSUMPTION OF RISK WAIVER OF RIGHTS</h2>
                        <p>In consideration for being permitted to utilize the facilities and equipment of GoJump Oceanside LLC and to engage in parachute jumping, ground instruction, flying and related activities (hereinafter referred to ?Parachuting Activities?).
                        </p>
                        <p>I, {firstName} {lastName}, hereby agree as follows:
                        </p>
                        <ol>
                           <li>I hereby forever RELEASE AND DISCHARGE <span className="check_box_wrap"><input  type="checkbox"  onChange={updateChecked}  id="javascript2"/><label htmlFor="javascript2"></label></span> GoJump Oceanside LLC, GoJump America LLC, GoSky Oceanside Inc., GoSky America 1 LLC, GoSkyAmerica 2 LLC, GoSky America 3 LLC, GoSky America 4 LLC, GoJump Oceanside Inc, Vetter Investment LLC, Seattle Aircraft Rentals LLC, Sky Team Aviation Inc., Airport Property Ventures LLC and all employees, members and managing members of the aforementioned LLCs; the City of Oceanside California and its employees and officers; any third-party retailer of these activities and their employees, agents or representatives; Uninsured United Parachute Technologies LLC; all manufacturers, distributors and dealers of skydiving equipment and the United States Parachute Association, their officers, directors, agents, employees, independent contractors, instructors, pilots, jumpmasters, owner of aircraft and land utilized for Parachuting Activities (hereinafter collectively the ?RELEASED PARTIES?); including, but not limited to, losses CAUSED BY THE PASSIVE OR ACTIVE NEGLIGENCE OF THE ?RELEASED PARTIES? as aforementioned above, including any obvious or latent defects on the drop zone or landing area or in the equipment used <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript3"/><label htmlFor="javascript3"></label></span>.
                           </li>
                           <li>I further agree that I WILL NOT SUE OR MAKE A CLAIM against the RELEASED PARTIES, for damages or other losses sustained as a result of my participation in Parachuting Activities. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript4"/><label htmlFor="javascript4"></label></span>. </li>

                           <li>I also agree to INDEMNIFY AND HOLD THE RELEASED PARTIES HARMLESS from all claims, judgments and costs, including attorney?s fees incurred in connection with any action brought as a result of my participation in Parachuting Activities, <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript31"/><label htmlFor="javascript31"></label></span> including but not limited to losses CAUSED BY THE PASSIVE OR ACTIVE NEGLIGENCE OF THE RELEASED PARTIES, or hidden, latent, or obvious defects on the drop zone or in the equipment or aircraft used. I acknowledge and agree that this agreement shall remain in full force and effect now and in the future <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript5"/><label htmlFor="javascript5"></label></span>. This agreement shall be binding upon my heirs, executors, and administrators of my estate <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript6"/><label htmlFor="javascript6"></label></span>. THE INTENT OF THIS RELEASE IS TO RELEASE AND DISCHARGE THE RELEASED PARTIES OF ANY DUTY OF CARE TO ME WHATSOEVER IN SO FAR AS IT IS POSSIBLE TO DO SO UNDER THE LAWS OF THE STATE OF CALIFORNIA OR ANY OTHER PROPER JURISDICTION WHATSOEVER <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript7"/><label htmlFor="javascript7"></label></span>.
                           </li>
                           <li>I understand and acknowledge that Parachuting Activities have inherent dangers that no amount of care, instruction or expertise can eliminate and I EXPRESSLY AND VOLUNTARILY ASSUME ALL RISKS <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript41"/><label htmlFor="javascript41"></label></span> ASSOCIATED WITH PARACHUTING ACTIVITIES. I am fully aware that skydiving activities include the possibility of SERIOUS INJURY AND/OR DEATH. Knowing this I ASSUME ALL RISKS OF INJURY OR DEATH, even though there may be PASSIVE OR ACTIVE NEGLIGENCE, HIDDEN, LATENT, and OR OBVIOUS DEFECTS in or on the premises, equipment or aircraft. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript42"/><label htmlFor="javascript42"></label></span> I understand the risks and dangers to my physical person. I have been adequately informed about these dangers and risks and I am sufficiently informed to sign agreements with which I willingly give up important legal rights <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript43"/><label htmlFor="javascript43"></label></span>. I expressly authorize GoJump Oceanside LLC to summon medical care on my behalf in the event that I am incapacitated. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript44"/><label htmlFor="javascript44"></label></span> </li>
                           <li>I have been advised and recognize that my Parachuting Activities are not covered by any personal or general liability insurance policy issued to or maintained by the RELEASED PARTIES <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript51"/><label htmlFor="javascript51"></label></span>.</li>
                           <li>I understand that because of the unavoidable and unpredictable dangers involved in the use of parachutes, the RELEASED PARTIES are making no warranty of any kind, expressed, or implied, concerning any and all equipment, aircraft or facilities provided by the RELEASED PARTIES, PARACHUTING is a dangerous sport and associated equipment, such as PARACHUTES DO NOT ALWAYS WORK the way they are expected. Furthermore, I understand that my stability and body positions can drastically affect the operation of the parachute <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript61"/><label htmlFor="javascript61"></label></span>. I understand that the parachutes provided by the RELEASED PARTIES are provided without any warranty that they are fit to use for any purpose whatsoever, without the warrant of merchantability and in particular without any warranty that they are fit to use in descending from an aircraft. Furthermore, I understand that there is no warranty that the parachutes have been packed without a hidden defect in the packing. I UNDERSTAND THAT I NEED NOT USE THE EQUIPMENT SUPPLIED BY A RELEASED PARTY, BUT I MAY USE MY OWN EQUIPMENT, IF IT IS APPROVED BY A CERTIFIED RIGGER. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript62"/><label htmlFor="javascript62"></label></span>. The approval for use of any equipment by a rigger is not a warranty that the equipment is suitable for any purpose, but merely an option. I understand these disclaimers and I accept them. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript63"/><label htmlFor="javascript63"></label></span>.</li>

                           <li>I understand that because of the nature of the sport parachuting, it is impossible for any instructor to determine with any degree of certainty that I have been properly trained to participate in the sport or that I have fully grasped and comprehended the instruction presented to me. Furthermore, it is impossible for an instructor to predict how anyone will react under the high speed conditions and stress that are inherent in sport parachuting. For that reason, I understand that there is no warranty, whatsoever, as to the adequacy of training provided by the RELEASED PARTIES to me. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript71"/><label htmlFor="javascript71"></label></span>. I understand that I will be required to warrant to the RELEASED PARTIES, that based upon my own evaluation of the training I have received that I believe that I have been adequately trained and that I can safely perform a parachute jump and cope with the high speed conditions and stress of sport parachuting, before I will be allowed to make a parachute jump. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript72"/><label htmlFor="javascript72"></label></span>.

                           </li>
                           <li>I specifically agree that I have inspected all the land, facilities, equipment and aircraft of GoJump Oceanside LLC and their concessionaries. I acknowledge that the drop zone (landing area) does contain, or is located in close proximity to, such dangerous objects as sand, ocean waters, coral, trees, fences, powerlines, hills, streams, buildings, rocks, hidden holes, uneven terrain, clods of dirt, native wildlife, freeways, highways and other roads, homes, businesses, unpredictable wind conditions, and other natural and man made objects that can cause injury to me upon landing; furthermore I understand that the drop zone is in the vicinity of an active runway and that if I land near a taxiing aircraft, my parachute may be caught by the aircraft or I may be struck by the aircraft, and I assume the risk of injury or death upon landing and I understand that even under the best conditions, landing is an extremely dangerous activity and many injuries occur. Based upon my independent evaluation of all risks I REAFFIRM MY ASSUMPTION OF THESE EXTREME RISKS AND DANGERS SET OUT IN THIS AGREEMENT <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript81"/><label htmlFor="javascript81"></label></span>.</li>
                           <li>As part of the consideration for my being allowed to utilize the facilities of GoJump Oceanside LLC, I PROMISE NOT TO SUE <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript91"/><label htmlFor="javascript91"></label></span> any of the RELEASED PARTIES for any cause of action whatsoever; furthermore, I realize that the damages of the RELEASED PARTIES for any breach of this promise are uncertain and difficult to establish and that in the event I breach this promise I agree that the LIQUIDATED DAMAGES THAT I WILL BE LIABLE TO PAY TO EACH OF THE RELEASED PARTIES NAMED IN ANY LAWSUIT I MAY BRING IS $25,000.00 <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript92"/><label htmlFor="javascript92"></label></span> FOR EACH DEFENDANT. I further agree that this provision for liquidated damages shall apply to any action in which I am required to indemnify the RELEASED PARTIES and it shall be in addition to any award made to the third party in each suit. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript93"/><label htmlFor="javascript93"></label></span></li>
                           <li>I agree to follow all GoJump Oceanside LLC safety rules. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript101"/><label htmlFor="javascript101"></label></span>. I understand that I may be prohibited from participation in skydiving if I exhibit behavior that GoJump Oceanside LLC believes is or could be detrimental to myself or other participants <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked}  id="javascript102"/><label htmlFor="javascript102"></label></span>.</li>
                           <li>I certify that, considering my life style and manner in which I am supporting my dependents, I have made adequate provisions for my spouse, if any, my children, if any, my heirs, if any, and all other persons dependent upon me so that in the event of my death they will have suffered no financial loss.<span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript111"/><label htmlFor="javascript111"></label></span>.</li>
                           <li>I further agree that in the event I have any claim whatsoever against any of the RELEASED PARTIES arising out of my parachuting or skydiving activities including an action for personal injury, that it all be a condition precedent to the filing of a lawsuit against any of t the RELEASED PARTIES that the matter first be arbitrated by an arbitration board appointed by the board of governors of the society and that the decision and finding of that board shall be final and binding upon all persons. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript121"/><label htmlFor="javascript121"></label></span>.</li>
                           <li>ASSIGNMENT OF PROCEEDS: In the event that I (or anyone on my behalf or any representatives of my estate) file a lawsuit against any of the RELEASED PARTIES and funds, or any tangible objects or assets, are, in fact, collected, then I hereby irrevocably agree to pay 100% of such funds (or tangible objects or assets) to a nominee, to be selected by the RELEASED PARTIES with the understanding that such funds (or tangible objects or assets) be distributed amongst the entities that constitute the RELEASED PARTIES including, but not limited to the person or entity against whom a judgment was obtained and funds (or tangible objects or assets) were collected from. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript131"/><label htmlFor="javascript131"></label></span>. I further agree that, in the event that I, or anyone on my behalf or any representative of my estate, hire an attorney to pursue any lawsuit against the RELEASED PARTIES, that I, or anyone on my behalf or such a representative of my estate, will be solely and personally responsible to pay an attorney hired by me (or any attorney hired by anyone on my behalf or any attorney hired by any representative of my estate). In no case shall any attorney hired by me (or any attorney hired by anyone purporting to act on my behalf or any attorney acting on behalf of my estate) be permitted to seek to collect their fees from the RELEASED PARTIES, and no attorney fees shall be deducted from any sum (or tangible objects or assets) to be paid by or to the RELEASED PARTIES. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript132"/><label htmlFor="javascript132"></label></span>. It is my understanding and intent that this assignment is irrevocable and will supersede any subsequent assignment of funds or fee agreement, which I, or anyone may enter into on my behalf with any attorney or law firm. I further agree that this paragraph is separate and apart from the indemnification for attorney fees I have signed which is part of this Agreement. I further agree and understand that, in addition to paying the proceeds (in whatever form that takes), that I (or anyone acting on my behalf or any representative of my estate) will be totally and wholly responsible for any and all attorney fees charged or billed by any attorney or law firm representing me or my estate. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript133"/><label htmlFor="javascript133"></label></span>.

                           </li>
                           <li>It is further specifically agreed that venue and jurisdiction for any legal action arising out of any matter which is the subject of this document shall be in the superior court of the State of California, County of San Diego</li>
                           <li>If the Court shall decide that any clause in this contract is illegal or unenforceable, such determination shall not effect the validity or enforceability of the remaining provisions hereof, all of which would affect my ability to engage in parachute training and jumping and that I am not now under treatment of any physical or mental disorder, including but not limited to any of the following:
                              <ol>
                                    <li>Cardiac or pulmonary condition or disease</li>
                                    <li>High or low blood pressure</li>
                                    <li>Fainting spells or convulsions</li>
                                    <li>Hearing loss or impairment</li>
                                    <li>Nervous disorders</li>
                                    <li>Diabetes</li>
                                    <li>Kidney or related diseases</li>
                                    <li>Shortness of breath</li>
                                    <li>Psychiatric disorders</li>
                              </ol>
                              I certify that I am not on any regular medication and have not taken any alcoholic beverages or drugs within the last twelve (12) hours. I further certify that I am not skydiving within 24 hours of my last scuba dive. I also recognize that it is against Federal, State, United States Parachute Association and Parachute Center rules and regulations to take either alcohol or drugs while engaging in Parachuting Activities and agree to refrain from doing so. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript151"/><label htmlFor="javascript151"></label></span>. I understand that GoJump Oceanside LLC reserves the right to deny services to anyone deemed under the influence. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript152"/><label htmlFor="javascript152"></label></span>.

                           </li>
                           <li>Sport parachuting is defined in California Government Code section 831.7 as a hazardous recreational activity. Government Code section 831.7(a) provides as follows: ?(a) Neither a public entity nor a public employee is liable to any person who participates in a hazardous recreational activity, including any person who assists the participant, or to any spectator who knew or reasonably should have known that the hazardous recreational activity created a substantial risk of injury to himself or herself and was voluntarily in the place of risk, or having the ability to do so failed to leave, for any damage or injury to property or persons arising out of that hazardous recreational activity.? I agree that the City of Ocean has not charged any fee for my participation in parachuting activities. I acknowledge, accept, and assume the risk that serious bodily injury or death may occur as a result of my voluntary decision to participate in this activity. Neither the City of Oceanside nor any of its employees have any duty to warn me of the risks associated with this activity. I acknowledge that neither the City of Oceanside nor any of its employees are involved with the operation or maintenance of the aircraft used in this activity, the drop zone, or any other facility or equipment used in this activity. I further acknowledge and agree that the City of Oceanside has not promoted the participation or observance of this hazardous recreational activity. I further acknowledge the City of Oceanside has made no representation or warranty about GoJump Oceanside LLC or anyone else associated with this activity. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript16"/><label htmlFor="javascript16"></label></span></li>
                           <li>I authorize GoJump Oceanside LLC to use photos and video footage of my skydive in promotional materials. <span className="check_box_wrap"><input type="checkbox"  onChange={updateChecked} id="javascript17"/><label htmlFor="javascript17"></label></span>.</li>
                        </ol>

                        <p><strong>I HAVE CAREFULLY READ THIS AGREEMENT AND RELEASE OF LIABILITY, I FULLY UNDERSTAND AND AGREE TO ITS CONTENTS AND SIGN IT OF MY OWN FREE WILL. THIS DOCUMENT CONSISTS OF FOUR (4) PAGES.</strong> </p>

                        <p className="sign">
                        <SignatureCanvas penColor='black'
                           canvasProps={{width: 180, height: 80, className: 'sigPad'}}
                           ref={signature} onEnd={signatureTouched} />
                        </p>
                        <p>{firstName} {lastName}</p>
                        <p>Date: {date}</p>
                     </div>
                     <div className="mt-5"></div>
                  </div>
               </Col>
            </Row>  
      </Container>

      <Footer action={handleSubmit} disabled={confirmButton} location="/emergency-contact" progress={90} />
      </>
   );
}

export default Terms;