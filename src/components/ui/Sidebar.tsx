import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-r-2xl p-6 hidden md:flex flex-col">
      <nav className="flex-1">
        <ul className="space-y-3">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5.121 17.804A9.004 9.004 0 0112 15c2.21 0 4.21.802 5.879 2.137M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
