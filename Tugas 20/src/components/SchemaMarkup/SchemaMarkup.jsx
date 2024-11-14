import React from 'react';

const SchemaMarkup = ({ organizationName, description, phone, teamMembers }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organizationName,
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": phone,
      "contactType": "customer support"
    },
    "member": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.jobTitle,
      "image": member.image
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
};

export default SchemaMarkup;
