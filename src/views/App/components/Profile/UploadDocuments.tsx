import { FileUpload, Select, DatePicker, Textarea, ButtonSpinner } from "src/components/FormItems";
import { toast } from "react-toastify";
import { getUrl } from "src/Helpers/Basic";
import { useState } from "react";


function UploadDocuments({ documents ,uploadDocument ,loading ,progress }: { documents: any,uploadDocument:any ,loading:Boolean ,progress:Number}) {
	
  const [document,setDocument] = useState(null)
	const upload = async (data: any,docType:any) => {
    setDocument(docType)
    if(!data) {
      return toast.error(`Please select an Image file`, {
        position: "top-center",
        autoClose: 1000,
      });
    }
    let result = await uploadDocument(data,docType)
    setDocument(null)
		
	};
	return (
		<form className="w-full lg:p-24 sm:p-4 ">
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          {documents && documents.passport_front ? <DocImage url={documents.passport_front} text={'Passport Front'}/> : <FileUpload upload={(data:any) =>{ upload(data,'passport_front')}} maxSize={2} loading={document == 'passport_front' ? loading : false} progress={document == 'passport_front' ? progress : 0} text={"Upload Passport Front"} />}
        </div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          {documents && documents.passport_back ? <DocImage url={documents.passport_back} text={'Passport Back'}/> : <FileUpload upload={(data:any) =>{ upload(data,'passport_back')}} maxSize={2} loading={document == 'passport_back' ? loading : false} progress={document == 'passport_back' ? progress : 0} text={"Upload Passport Back"} />}
        </div>
			</div>

			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
        {documents && documents.selfie_with_id ? <DocImage url={documents.selfie_with_id} text={'Selfie With ID'}/> : <FileUpload upload={(data:any) =>{ upload(data,'selfie_with_id')}} maxSize={2} loading={document == 'selfie_with_id' ? loading : false} progress={document == 'selfie_with_id' ? progress : 0} text={"Upload Selfie with ID"} />}
				</div>
			</div>
      <div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          {documents && documents.proof_of_address ? <DocImage url={documents.proof_of_address} text={'Proof of Address'}/> : <FileUpload upload={(data:any) =>{ upload(data,'proof_of_address')}} maxSize={2} loading={document == 'proof_of_address' ? loading : false} progress={document == 'proof_of_address' ? progress : 0} text={"Upload Address Proof"} />}
        </div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          {documents && documents.business_certification ? <DocImage url={documents.business_certification} text={'Business Certification'}/> : <FileUpload upload={(data:any) =>{ upload(data,'business_certification')}} maxSize={2} loading={document == 'business_certification' ? loading : false} progress={document == 'business_certification' ? progress : 0} text={"Upload Business Certification Proof"} />}
        </div>
			</div>
		</form>
	);
}

const DocImage = ({url,text}:{url:string,text:string}) => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <figure className="relative w-full h-96">
      <img className="object-cover object-center w-full h-full rounded-xl" src={getUrl(url)} alt="nature image" />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <h5 className="text-xl font-medium text-slate-800">
          {text}
          </h5>
        </div>
      </figcaption>
    </figure>
  </div>
  )
}

export default UploadDocuments;
