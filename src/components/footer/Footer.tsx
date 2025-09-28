export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-10 border-t">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
