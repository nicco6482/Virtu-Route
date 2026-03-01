import { redirect } from 'next/navigation';

export default function DashboardPage() {
    // Para simplificar este MVP mientras se monta Supabase real:
    // Puedes cambiar esto a '/comprador' o '/creador' si quieres ver diferentes layouts por defecto
    redirect('/creador');
    return null;
}
