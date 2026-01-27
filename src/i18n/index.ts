// made by leyn.cx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Our Selection": "Our Selection",
      "Curated Favorites": "Curated Favorites",
      "Handcrafted with love": "Handcrafted with love using the finest ingredients and premium beans sourced from sustainable farms around the world.",
      "View Full Menu with Prices": "View Full Menu with Prices",
      "A Glimpse Inside": "A Glimpse Inside",
      "From our cozy reading corners...": "From our cozy reading corners to our sun-drenched patio, every corner is designed for your comfort.",
      "Swipe to see more": "Swipe to see more",
      "Host Your Moments": "Host Your Moments",
      "From intimate dates...": "From intimate dates to grand celebrations, we provide the perfect backdrop for life's meaningful moments.",
      "Romantic Dates": "Romantic Dates",
      "Romantic Dates desc": "Create unforgettable moments with our intimate corner tables, candlelit ambiance, and specially curated date-night menu.",
      "Anniversary Celebrations": "Anniversary Celebrations",
      "Anniversary desc": "Mark your special milestones in style. We offer custom cake arrangements and private area reservations.",
      "Family Reunions": "Family Reunions",
      "Family desc": "Reconnect with loved ones in our spacious venue. Perfect for gatherings of up to 40 guests.",
      "Parties": "Parties",
      "Parties desc": "Exclusive venue hire for birthdays, baby showers, and special occasions with customized catering.",
      "Get in Touch": "Get in Touch",
      "Visit or Contact Us": "Visit or Contact Us",
      "We'd love to hear from you...": "We'd love to hear from you. Drop by for a coffee or send us a message.",
      "Send Us a Message": "Send Us a Message",
      "Your Name": "Your Name",
      "Phone Number": "Phone Number",
      "Event Type (Optional)": "Event Type (Optional)",
      "Your Message": "Your Message",
      "Send Message": "Send Message",
      "Menu": "Menu",
      "Gallery": "Gallery",
      "Services": "Services",
      "Contact": "Contact",
      "Drinks": "Drinks",
      "Food": "Food",
      "Discover our carefully curated selection of premium coffees and food":"Discover our carefully curated selection of premium coffees and food",
      "Where every cup tells a story":"Where every cup tells a story",
      "Explore Menu":"Explore Menu",
      "Book an Event":"Book an Event",
      "Inquire About Hosting":"Inquire About Hosting"
    }
  },
  ar: {
    translation: {
      "Our Selection": "اختيارنا",
      "Curated Favorites": "المفضلات المختارة",
      "Handcrafted with love": "مصنوعة بحب باستخدام أفضل المكونات وفاصولياء البن الممتازة المصدرة من مزارع مستدامة حول العالم.",
      "View Full Menu with Prices": "عرض القائمة الكاملة مع الأسعار",
      "A Glimpse Inside": "نظرة خاطفة داخل",
      "From our cozy reading corners...": "من أركان القراءة المريحة إلى التراس المشمس، كل زاوية مصممة لراحتك.",
      "Swipe to see more": "اسحب لرؤية المزيد",
      "Host Your Moments": "استضف لحظاتك",
      "From intimate dates...": "من المواعيد الحميمة إلى الاحتفالات الكبرى، نوفر الخلفية المثالية لأهم لحظات الحياة.",
      "Romantic Dates": "مواعيد رومانسية",
      "Romantic Dates desc": "أنشئ لحظات لا تُنسى مع طاولاتنا الحميمة في الأركان، والأجواء المضاءة بالشموع، وقائمة الطعام المخصصة لليلة المواعيد.",
      "Anniversary Celebrations": "احتفالات الذكرى السنوية",
      "Anniversary desc": "احتفل بمعالمك الخاصة بأناقة. نقدم ترتيبات كعك مخصصة وحجوزات مناطق خاصة.",
      "Family Reunions": "لقاءات عائلية",
      "Family desc": "أعد الاتصال بأحبائك في مكاننا الواسع. مثالي للتجمعات تصل إلى 40 ضيف.",
      "Parties": "حفلات",
      "Parties desc": "تأجير مكان حصري لأعياد الميلاد وحفلات الاستحمام والمناسبات الخاصة مع التموين المخصص.",
      "Get in Touch": "تواصل معنا",
      "Visit or Contact Us": "زورنا أو اتصل بنا",
      "We'd love to hear from you...": "نود أن نسمع منك. مر بكوب قهوة أو أرسل لنا رسالة.",
      "Send Us a Message": "أرسل لنا رسالة",
      "Your Name": "اسمك",
      "Phone Number": "رقم الهاتف",
      "Event Type (Optional)": "نوع الحدث (اختياري)",
      "Your Message": "رسالتك",
      "Send Message": "إرسال الرسالة",
      "Menu": "القائمة",
      "Gallery": "المعرض",
      "Services": "الخدمات",
      "Contact": "التواصل",
      "Drinks": "المشروبات",
      "Food": "المأكولات",
      "Discover our carefully curated selection of premium coffees and food":"اكتشف مجموعتنا المختارة بعناية من أجود أنواع القهوة والأطعمة",
      "Where every cup tells a story":"حيث يحكي كل كوب قصة",
      "Explore Menu":"استكشاف القائمة",
      "Book an Event":"احجز موعدا",
      "Inquire About Hosting":"استفسر عن خدمات الاستضافة"
    }
  },
  fr: {
    translation: {
      "Our Selection": "Notre Sélection",
      "Curated Favorites": "Favoris Curatés",
      "Handcrafted with love...": "Fabriqués avec amour en utilisant les meilleurs ingrédients et des grains de café premium issus de fermes durables du monde entier.",
      "View Full Menu with Prices": "Voir le Menu Complet avec Prix",
      "A Glimpse Inside": "Un Aperçu Intérieur",
      "From our cozy reading corners...": "De nos coins lecture confortables à notre terrasse ensoleillée, chaque coin est conçu pour votre confort.",
      "Swipe to see more": "Glissez pour voir plus",
      "Host Your Moments": "Accueillez Vos Moments",
      "From intimate dates...": "Des rendez-vous intimes aux célébrations grandioses, nous fournissons le décor parfait pour les moments importants de la vie.",
      "Romantic Dates": "Rendez-vous Romantiques",
      "Romantic Dates desc": "Créez des moments inoubliables avec nos tables d'angle intimes, ambiance aux chandelles, et menu spécialement curaté pour les soirées de rendez-vous.",
      "Anniversary Celebrations": "Célébrations d'Anniversaire",
      "Anniversary desc": "Marquez vos jalons spéciaux avec style. Nous offrons des arrangements de gâteaux personnalisés et des réservations de zones privées.",
      "Family Reunions": "Réunions Familiales",
      "Family desc": "Reconnectez-vous avec vos proches dans notre lieu spacieux. Parfait pour des rassemblements jusqu'à 40 invités.",
      "Parties": "Fêtes",
      "Parties desc": "Location exclusive de lieu pour anniversaires, douches de bébé, et occasions spéciales avec restauration personnalisée.",
      "Get in Touch": "Entrer en Contact",
      "Visit or Contact Us": "Visitez-nous ou Contactez-nous",
      "We'd love to hear from you...": "Nous aimerions avoir de vos nouvelles. Passez prendre un café ou envoyez-nous un message.",
      "Send Us a Message": "Envoyez-nous un Message",
      "Your Name": "Votre Nom",
      "Phone Number": "Numéro de Téléphone",
      "Event Type (Optional)": "Type d'Événement (Optionnel)",
      "Your Message": "Votre Message",
      "Send Message": "Envoyer le Message",
      "Menu": "Menu",
      "Gallery": "Galerie",
      "Services": "Services",
      "Contact": "Contact",
      "Drinks": "Boissons",
      "Food": "Nourriture",
      "Discover our carefully curated selection of premium coffees and food":"Découvrez notre sélection soigneusement choisie de cafés et de produits alimentaires haut de gamme.",
      "Where every cup tells a story":"Là où chaque tasse raconte une histoire",
      "Explore Menu":"Explorer le menu",
      "Book an Event":"Réservez un événement",
      "Inquire About Hosting":"Renseignez-vous sur les services d'hébergement"
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;