import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formatDate } from "src/Helpers/Basic";
import { BasicInput, Select, DatePicker, Textarea, ButtonSpinner } from "src/components/FormItems";
import { COUNTRIES, getHeightValues, getWeightValues, EYE_COLORS, HAIR_COLORS, GENDERS } from "src/Helpers/Constants";
import { useEffect } from "react";

const schema = z.object({
	height: z.string({ required_error: "Height is required" }),
	gender: z.string({ required_error: "Gender is required" }),
	dob: z.string({ required_error: "Date of Birth is required" }),
	weight: z.string({ required_error: "Weight is required" }),
	eyecolor: z.string({ required_error: "Eyecolor  is required" }),
	haircolor: z.string({ required_error: "HairColor is required" }),
	country: z.string().min(3, { message: "Country must of min 3 characters" }),
	country_code: z.string().min(2, { message: "country Code must of min 2 characters" }),
	telephone: z.string().min(5, { message: "Telephone must of min 5 characters" }),
	city: z.string().min(3, { message: "CIty must of min 3 characters" }),
	zipcode: z.string().min(2, { message: "Zip Code must of min 2 characters" }),
	profession: z.string().min(5, { message: "Profession must of min 5 characters" }),
	address: z.string().min(10, { message: "Address must of min 10 characters" }),
});

function BasicInfo({ onData, loading }: { onData: any, loading: any }) {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const countryValue = watch("country");
	useEffect(() => {
		let findCountry = COUNTRIES.find((c: any) => c.name == countryValue);
		if (!findCountry) return;
		setValue("country_code", findCountry.dial_code);
	}, [countryValue]);

	console.log(errors);
	const setDate = (date: any) => {
		date = formatDate(date);
		setValue("dob", date);
	};
	const onSubmit = (formData: any) => {
		onData(formData);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full lg:p-24 sm:p-4 ">
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<Select bind={{ ...register("height") }} label={"Height (cm)"} error={null} values={getHeightValues()} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<Select bind={{ ...register("gender") }} label={"Gender"} error={null} values={GENDERS} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<DatePicker maxDate={"01/01/2007"} onSelectDate={setDate} label={"Date of Birth"} />
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<Select bind={{ ...register("weight") }} label={"Weight (kg)"} error={null} values={getWeightValues()} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<Select bind={{ ...register("eyecolor") }} label={"Eye Color"} error={null} values={EYE_COLORS} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<Select bind={{ ...register("haircolor") }} label={"Hair Color"} error={null} values={HAIR_COLORS} />
				</div>
			</div>

			<div className="flex flex-wrap -mx-3 mb-6 mt-24">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<Select bind={{ ...register("country") }} label={"Country"} error={null} values={COUNTRIES.map((c: any) => c.name)} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<BasicInput label={"Country Code"} bind={{ ...register("country_code") }} disabled={true} error={errors.country_code} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<BasicInput bind={{ ...register("telephone") }} label={"Telephone"} error={errors.telephone} />
				</div>
			</div>

			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<BasicInput bind={{ ...register("city") }} label={"City"} error={errors.city} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<BasicInput bind={{ ...register("zipcode") }} label={"Zip Code"} error={errors.zipcode} />
				</div>
				<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
					<BasicInput bind={{ ...register("profession") }} label={"Profession"} error={errors.profession} />
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<Textarea bind={{ ...register("address") }} label={"Street Address"} error={errors.address} />
				</div>
			</div>
			<div className="flex items-center justify-center">
				<div className="w-full">
					<label className="flex justify-center bg-main-pink text-white text-center w-full p-2 mt-6  text-lg cursor-pointer">
						<button type="submit" className="text-center ml-2">
							{" "}
							{loading ? <ButtonSpinner /> : "Upload"}
						</button>
					</label>
				</div>
			</div>
		</form>
	);
}

export default BasicInfo;
