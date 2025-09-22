import { Button, View, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';
import { router } from "expo-router";
import { useState } from 'react';

export default function AccountPage() {
    const [loading, setLoading] = useState(false);

    const onSignOut = async () => {
        setLoading(true);
        try {
            // Panggil signOut tanpa parameter untuk logout global
            const { error } = await supabase.auth.signOut();

            if (error) {
                // Tampilkan error jika ada, tapi tetap coba redirect
                console.error("Sign out error:", error);
                Alert.alert("Sign Out Error", error.message);
            }
        } catch (e) {
            if (e instanceof Error) {
                console.error("Sign out exception:", e);
                Alert.alert("Sign Out Exception", e.message);
            }
        } finally {
            // Pastikan pengguna selalu kembali ke halaman login
            setLoading(false);
            router.replace("/login");
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            <Button
                title={loading ? 'Signing Out...' : 'Sign Out'}
                onPress={onSignOut}
                disabled={loading}
            />
        </View>
    );
}