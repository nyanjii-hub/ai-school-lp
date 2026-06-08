import Image from "next/image";

const navItems = [
  { label: "学べること", href: "#learn" },
  { label: "コース", href: "#courses" },
  { label: "受講生の声", href: "#voices" },
  { label: "FAQ", href: "#faq" }
];

const problems = [
  "AIツールを触ってみたが、仕事での使いどころが曖昧",
  "情報が多すぎて、何から学べばよいかわからない",
  "副業やキャリアに活かす具体的なアウトプットが作れない"
];

const learnItems = [
  {
    title: "生成AIの基礎理解",
    text: "ChatGPT、Claude、Codexなどの特徴を整理し、目的に応じて使い分ける土台を学びます。"
  },
  {
    title: "業務効率化の設計",
    text: "資料作成、リサーチ、メール、議事録など、日々の業務をAIで短縮する実践手順を扱います。"
  },
  {
    title: "成果物づくり",
    text: "ポートフォリオ、記事、業務改善案、簡易アプリなど、仕事に見せられる形まで仕上げます。"
  }
];

const courses = [
  "AI基礎コース",
  "業務効率化コース",
  "AIライティングコース",
  "AI副業コース",
  "AI開発入門コース"
];

const voices = [
  {
    name: "30代 会社員",
    text: "AIの使い方を点ではなく業務フローとして考えられるようになり、資料作成の準備時間を見直せました。"
  },
  {
    name: "40代 フリーランス志望",
    text: "副業に向けて、文章作成や提案文の改善など、すぐ試せるテーマから学べたのがよかったです。"
  },
  {
    name: "20代 営業職",
    text: "プロンプト例を覚えるだけではなく、目的から逆算する考え方を学べたので応用しやすいです。"
  }
];

const steps = [
  "無料相談で目的を整理",
  "基礎とAIツールの使い分けを学習",
  "業務や副業テーマで実践課題に取り組む",
  "成果物を整えて次の行動につなげる"
];

const faqs = [
  {
    question: "AI初心者でも受講できますか？",
    answer:
      "はい。基本用語や代表的な生成AIツールの使い方から扱う想定のため、初めての方でも学びやすい構成です。"
  },
  {
    question: "仕事をしながら学べますか？",
    answer:
      "会社員の方を想定し、短時間で取り組める課題と復習しやすい教材設計を前提にしています。"
  },
  {
    question: "副業につながる内容はありますか？",
    answer:
      "AIライティング、提案文作成、業務改善資料など、副業準備に活かしやすいアウトプット例を扱います。"
  },
  {
    question: "必ず収入や転職につながりますか？",
    answer:
      "成果を保証するものではありません。学習目的や状況に合わせて、実務に活かすための考え方と制作経験を提供する想定です。"
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold tracking-wide text-cyan-700">
      {children}
    </p>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#contact"
      className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-navy-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#contact"
      className="inline-flex min-h-12 items-center justify-center rounded-md border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-100"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3" aria-label="AI Career Lab">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-bold text-white">
              AI
            </span>
            <span className="text-base font-bold text-ink">AI Career Lab</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="メインナビゲーション">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-cyan-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-500"
          >
            無料相談
          </a>
        </div>
      </header>

      <section className="relative border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 md:grid-cols-[1fr_0.92fr] md:items-center md:pb-20 md:pt-16">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              AIを学ぶから、AIを仕事で使えるへ。
            </p>
            <h1 className="text-4xl font-bold leading-tight text-ink md:text-6xl">
              AIを学ぶだけで終わらせない。
              <br />
              仕事で使えるスキルへ。
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
              ChatGPT、Claude、Codexなどの生成AIを活用し、業務効率化・副業・キャリアアップにつなげる実践型スクール。
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              <PrimaryButton>無料説明会に申し込む</PrimaryButton>
              <SecondaryButton>無料相談を予約する</SecondaryButton>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {[
                ["対象", "20〜50代"],
                ["形式", "実践課題"],
                ["目的", "仕事活用"]
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold text-muted">{label}</dt>
                  <dd className="mt-1 text-sm font-bold text-ink md:text-base">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-lg bg-slate-100 shadow-soft md:h-[520px]">
            <Image
              src="/images/hero-ai-career-lab.jpg"
              alt="AI学習と業務活用をイメージした抽象的なワークスペース"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 46vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>AI時代の課題</SectionLabel>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">
              ツールを知っているだけでは、仕事の成果に変わりにくい。
            </h2>
            <div className="grid gap-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex gap-3 rounded-lg border border-line bg-white p-5 shadow-sm"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                  <p className="text-sm leading-7 text-muted md:text-base">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>AI Career Labで学べること</SectionLabel>
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-ink md:text-4xl">
              業務の流れに組み込めるAI活用を、基礎からアウトプットまで。
            </h2>
            <p className="max-w-md text-sm leading-7 text-muted md:text-base">
              架空スクールのポートフォリオ作品として、実務で自然に使える学習体験を想定しています。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {learnItems.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-md bg-cyan-50 text-sm font-bold text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="border-y border-line bg-ink py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-3 text-sm font-semibold tracking-wide text-cyan-100">コース紹介</p>
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              目的に合わせて選べる実践テーマ。
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {courses.map((course) => (
                <article key={course} className="rounded-lg border border-white/12 bg-white/8 p-5">
                  <h3 className="text-lg font-bold">{course}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    学習目的に合わせて、基礎理解から制作・業務改善まで段階的に取り組みます。
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="voices" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>受講生の声</SectionLabel>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-ink md:text-4xl">
            仕事や副業に向けて、AI活用の解像度を上げる。
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {voices.map((voice) => (
              <article key={voice.name} className="rounded-lg border border-line bg-slate-50 p-6">
                <p className="text-sm leading-7 text-muted">{voice.text}</p>
                <p className="mt-5 text-sm font-bold text-ink">{voice.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionLabel>学習ステップ</SectionLabel>
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">
              目的整理から成果物づくりまで、迷いにくい順番で進める。
            </h2>
            <ol className="grid gap-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-lg border border-line bg-white p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-ink text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm font-semibold text-ink md:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">よくある質問</h2>
          <div className="mt-8 divide-y divide-line rounded-lg border border-line bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5 open:bg-slate-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-ink">
                  {faq.question}
                  <span className="text-xl text-cyan-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cyan-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <SectionLabel>無料相談CTA</SectionLabel>
          <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">
            AIを仕事でどう使うか、まずは目的から整理しませんか。
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
            無料説明会・無料相談では、現在の業務や学習目的に合わせて、AI活用の始め方を確認できます。
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
            <PrimaryButton>無料説明会に申し込む</PrimaryButton>
            <SecondaryButton>無料相談を予約する</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-ink">AI Career Lab</p>
          <p>架空スクールのポートフォリオ用LPです。実在のサービスではありません。</p>
        </div>
      </footer>
    </main>
  );
}
