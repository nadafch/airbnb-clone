import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unaouthorize" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  const listing = await getListings({
    userId: currentUser.id,
  });

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties founds"
          subtitle="Looks like you havent reserved any properties"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PropertiesClient listings={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
