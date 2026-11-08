import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, AlertTriangle, ArrowRight, FileText } from 'lucide-react';
import { SITE_INFO } from '../data/apartmentsData';

interface TermsViewProps {
  onBack: () => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onBack }) => {
  return (
    <div className="py-10 md:py-16 bg-[#F3E2CC] min-h-screen text-[#3A2522]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-right">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#C6A16B]/40 pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#570A1B] hover:text-[#84394A] transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </button>
          <span className="text-xs text-[#C6A16B] font-alexandria">وثيقة السياسات الرسمية</span>
        </div>

        {/* Title Card */}
        <div className="bg-[#570A1B] text-[#FFF9F1] p-6 sm:p-8 rounded-3xl border border-[#C6A16B] shadow-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9F1]/10 text-[#C6A16B] text-xs">
            <FileText className="w-3.5 h-3.5" />
            <span>اتفاقية وشروط الإقامة المعتمدة</span>
          </div>
          <h1 className="font-alexandria font-extrabold text-2xl sm:text-3xl text-[#FFF9F1]">
            الشروط والأحكام وسياسة الإيجار
          </h1>
          <p className="text-xs sm:text-sm text-[#F3E2CC]/90 font-light leading-relaxed">
            تهدف هذه السياسات إلى حماية خصوصية وسكينة ضيوفنا الكرام وضمان تجربة إقامة فندقية راقية ومتميزة تليق بمستوى شقق رُقِيّ.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          
          {/* 1. Check-in & Check-out */}
          <div className="bg-[#FFF9F1] p-6 sm:p-8 rounded-2xl border border-[#C6A16B]/50 shadow-md space-y-4">
            <div className="flex items-center gap-2.5 text-[#570A1B]">
              <Clock className="w-5 h-5 text-[#C6A16B]" />
              <h2 className="font-alexandria font-bold text-lg">
                1. مواعيد تسجيل الوصول والمغادرة
              </h2>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3A2522] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#570A1B] shrink-0 mt-0.5" />
                <span><strong>موعد تسجيل الوصول:</strong> يبدأ من الساعة 4:00 عصراً (16:00). الدخول ذاتي سلس عبر الرمز الإلكتروني.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#570A1B] shrink-0 mt-0.5" />
                <span><strong>موعد تسجيل المغادرة:</strong> بحد أقصى الساعة 1:00 ظهراً (13:00) لتمكين فريق النظافة والتعقيم الفندقي من تجهيز الشقة للنزيل التالي.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#570A1B] shrink-0 mt-0.5" />
                <span>طلب تمديد المغادرة يخضع للتوفر وموافقة الإدارة المسبقة، وقد تُطبق رسوم إضافية في حال التأخر غير المصرح به.</span>
              </li>
            </ul>
          </div>

          {/* 2. Security Deposit */}
          <div className="bg-[#FFF9F1] p-6 sm:p-8 rounded-2xl border border-[#C6A16B]/50 shadow-md space-y-4">
            <div className="flex items-center gap-2.5 text-[#570A1B]">
              <ShieldCheck className="w-5 h-5 text-[#C6A16B]" />
              <h2 className="font-alexandria font-bold text-lg">
                2. مبلغ التأمين الأمني المسترد (Deposit)
              </h2>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3A2522] leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#570A1B] shrink-0 mt-0.5" />
                <span>يتم دفع مبلغ تأمين أمني قدره 1,000 ريال سعودي عند تأكيد الحجز ويوثق ذلك في عقد الإيجار الرسمي.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#570A1B] shrink-0 mt-0.5" />
                <span>يُعاد التأمين بالكامل فور مغادرة الضيف بعد فحص محتويات الشقة والتأكد من سلامة الأثاث والأجهزة وعدم وجود تلفيات.</span>
              </li>
            </ul>
          </div>

          {/* 3. House Rules */}
          <div className="bg-[#FFF9F1] p-6 sm:p-8 rounded-2xl border border-[#C6A16B]/50 shadow-md space-y-4">
            <div className="flex items-center gap-2.5 text-[#570A1B]">
              <AlertTriangle className="w-5 h-5 text-[#C6A16B]" />
              <h2 className="font-alexandria font-bold text-lg">
                3. قواعد المحافظة على السكينة والهدوء
              </h2>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3A2522] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#570A1B] mt-2 shrink-0"></span>
                <span><strong>منع التدخين الداخلي:</strong> يُمنع منعاً باتاً التدخين داخل الغرف والصالات حرصاً على نقاء الهواء ونظام الحريق. يُسمح فقط في الشرفات الخارجية المخصصة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#570A1B] mt-2 shrink-0"></span>
                <span><strong>منع الحفلات الصاخبة:</strong> الشقق مخصصة للإقامة الهادئة والعائلية ورجال الأعمال. لا يُسمح بإقامة الحفلات أو التجمعات الصاخبة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#570A1B] mt-2 shrink-0"></span>
                <span><strong>الحيوانات الأليفة:</strong> غير مسموح باصطحاب الحيوانات الأليفة للحفاظ على المعايير الصحية وتجنب الحساسية للنزلاء.</span>
              </li>
            </ul>
          </div>

          {/* 4. Cancellation Policy */}
          <div className="bg-[#FFF9F1] p-6 sm:p-8 rounded-2xl border border-[#C6A16B]/50 shadow-md space-y-4">
            <h2 className="font-alexandria font-bold text-lg text-[#570A1B]">
              4. سياسة الإلغاء والتعديل
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-[#3A2522] leading-relaxed">
              <p>
                - الإلغاء قبل موعد الوصول بأكثر من 48 ساعة: استرداد كامل المبلغ المدفوع.
              </p>
              <p>
                - الإلغاء خلال أقل من 48 ساعة من موعد الوصول: يتم خصم قيمة الليلة الأولى واسترداد ما عداها مع كامل مبلغ التأمين.
              </p>
              <p>
                - في حالة عدم الحضور (No-show): يُخصم كامل المبلغ ما عدا مبلغ التأمين المسترد.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
