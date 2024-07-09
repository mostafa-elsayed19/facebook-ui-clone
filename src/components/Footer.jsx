import ListItem from "./reusable/ListItem";
import UnorderedList from "./reusable/UnorderedList";

const DATA = [
	"Sign Up",
	"Log in",
	"Messenger",
	"Facebook Lite",
	"Video",
	"Places",
	"Games",
	"Marketplace",
	"Meta Pay",
	"Meta Store",
	"Meta Quest",
	"Meta AI",
	"Instagram",
	"Threads",
	"Fundraisers",
	"Services",
	"Voting Information Centre",
	"Privacy Policy",
	"Privacy Centre",
	"Cookie settings",
	"Groups",
	"About",
	"Create ad",
	"Create Page",
	"Developers",
	"Careers",
	"Cookies",
	"Cookie settings",
	"AdChoices",
	"Terms",
	"Help",
	"Contact uploading and non-users",
];

const LANGS = ["English (UK)", "العربية"];

function Footer() {
	return (
		<footer className="pt-20 pb-10">
			<div className="m-auto w-5/6 flex flex-col justify-between">
				<section>
					<UnorderedList border={true}>
						{LANGS.map((lang, index) => (
							<ListItem item={lang} index={index} key={index} />
						))}
					</UnorderedList>

					<UnorderedList>
						{DATA.map((item, index) => (
							<ListItem item={item} key={index} />
						))}
					</UnorderedList>
				</section>
				<section className="pl-4 my-2 text-slate-700">
					Meta &copy; 2024
				</section>
			</div>
		</footer>
	);
}

export default Footer;
